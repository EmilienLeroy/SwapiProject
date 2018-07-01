<template>
    <div>
        <p>{{ question.question }}</p>
        <answer v-for="(answer, index) in answers" v-bind:key="index" v-bind:text="answer.name" ></answer>
    </div>
</template>

<script>
import answer from './Button.vue';
import * as random from '../modules/random.js';
import Question from '../modules/Question.js';

export default {
    components: {answer},
    mounted: function() {
        this.question = new Question();
        this.answers = this.question.allAnswer;
    },
    data(){
        return {
            answers: [],
            question: ""
        }
    }
}
</script>
