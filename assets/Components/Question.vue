<template>
    <div class="question">
        <score v-bind:score="score"></score>
        <div class="question__title">        
            <p>{{ question.question }}</p>
        </div>
        <div>
            <transition-group name="slide-fade" mode="out-in">
                <answer v-for="(answer, index) in answers" v-bind:key="index" v-bind:text="answer.name" @click.native="validateAnswer(index)"></answer>
            </transition-group>
        </div>
    </div>
</template>

<script>
import answer from './Button.vue';
import score from './Score.vue';
import * as random from '../modules/random.js';
import Question from '../modules/Question.js';

export default {
    components: {
        answer,
        score
    },
    mounted: function() {
        this.question = new Question();
        this.answers = this.question.allAnswer;
    },
    data(){
        return {
            answers: [],
            question: true,
            score: 0,
            nbQuestion: 0,
        }
    },
    methods: {
        validateAnswer: function(index){
            if(this.nbQuestion < 4)
            {
                if(this.question.goodAnswer == index){
                    this.score ++;
                    this.nbQuestion ++;
                }else{
                    this.nbQuestion ++;
                }
                
                //Generate a new question
                this.question = new Question();
                this.answers = this.question.allAnswer;
            }else{
                this.$router.push({name: 'result', params: { score: this.score }})
            }
        }
    }
}
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}
 
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to{
    transform: translateX(-10px);
    opacity: 0;
}

.question__title{
    height: 50px;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 25px;
}
</style>

