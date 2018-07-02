<template>
    <div>
        <score v-bind:score="score"></score>
        <p>{{ question.question }}</p>
        <answer v-for="(answer, index) in answers" v-bind:key="index" v-bind:text="answer.name" @click.native="validateAnswer(index)"></answer>
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
            question: "",
            score: 0,
            nbQuestion: 0
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
