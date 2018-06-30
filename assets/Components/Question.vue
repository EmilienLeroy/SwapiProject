<template>
    <div>
        <p>{{ question }}</p>
        <answer></answer>
    </div>
</template>

<script>
import answer from './Button.vue';
export default {
    components: {answer},
    mounted: function() {
        this.$http.get("https://swapi.co/api/people/1/").then((response) =>{
			this.question = response.body.name
		})
    },
    data(){
        return {
            answer: [],
            question: ""
        }
    }
}
</script>
