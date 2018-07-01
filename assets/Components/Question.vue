<template>
    <div>
        <p>{{ question }}</p>
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
        let question = new Question();
        this.answers = question.allAnswer;
    },
    data(){
        return {
            answers: [],
            question: ""
        }
    }
}
</script>
