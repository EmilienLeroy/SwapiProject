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
            <div v-else>Question</div>
        </div>    
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {    
    created() {
        let self = this;
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;
        this.socket = io.connect('http://localhost:8888');
        this.socket.on('connect', function() {
            self.socket.emit('room', {id: self.id, player: self.name});
        });

        this.socket.on('player', function(game) {
            if(self.idPlayer == null){
                self.idPlayer = game.player.length
            };
            self.players = game.player
        });
    },
    data(){
        return{
            id: '',
            name: '',
            socket: null,
            idPlayer: null,
            currentPlayer: 1,
            players: []
        }
    }
}
</script>
