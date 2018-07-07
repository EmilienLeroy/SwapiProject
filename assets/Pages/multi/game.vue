<template>
    <div>
        <h2>You are the player n° {{idPlayer}}</h2>
        <ul>
            <li v-for="(player, index)  in players" v-bind:key="index">
                {{ player.name }} : {{player.score}}
            </li>
        </ul>
        <div>
            <div v-if="players.length < 2">Wait a other player</div>
            <div v-else-if="currentPlayer != idPlayer">Wait</div>
            <div v-else class="question">
                <div class="question__title">        
                    <p>{{ question.question }}</p>
                </div>
                <div>
                    <transition-group name="slide-fade" mode="out-in">
                        <answer v-for="(answer, index) in answers" v-bind:key="index" v-bind:text="answer.name" @click.native="validateAnswer(index)"></answer>
                    </transition-group>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import io from 'socket.io-client';
import answer from '../../Components/Button.vue';
import Question from '../../modules/Question.js';

export default {
    components:{
        answer
    },    
    created() {
        //get the context for the socket callback
        let self = this;

        //get the game id and player name
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;

        //Generate a new question
        this.question = new Question();
        this.answers = this.question.allAnswer;

        //Connect the socket to the server
        this.socket = io.connect('http://localhost:8888');

        //on connect join a room
        this.socket.on('connect', function() {
            self.socket.emit('room', {id: self.id, player: self.name});
        });

        //get all player
        this.socket.on('player', function(game) {
            if(self.idPlayer == null){
                self.idPlayer = game.player.length
            };
            self.players = game.player
        });

        //update the score and change the player
        this.socket.on('answer',function(game){
            if(self.currentPlayer==1){
                self.currentPlayer++
            }else{
                self.currentPlayer--
            }
            self.players = game.player
        })

        //send the final result
        this.socket.on('resutl',function(game){
            self.$router.push({name: 'resultMulti', params: { game: game }})
        })
    },
    data(){
        return{
            id: '',
            name: '',
            socket: null,
            idPlayer: null,
            currentPlayer: 1,
            players: [],
            answers: [],
            question: true,
            nbQuestion: 0,
        }
    },
    methods: {
        validateAnswer: function(index){
            //if the good answer increment the score
            if(this.question.goodAnswer == index){
                this.players[this.idPlayer-1].score++;
            }

            //send the score to the server
            this.socket.emit('answer', {id: this.id, player: this.players});
        }
    }
}
</script>
