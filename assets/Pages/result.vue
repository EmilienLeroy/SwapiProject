<template>
    <div class="result">
        <h2 class="result__title">Result</h2>
        <score v-bind:score="score"></score>
        <customButton v-bind:text="replay" @click.native="toSolo"></customButton>
        <customButton v-bind:text="home" @click.native="toHome"></customButton>
    </div>
</template>

<script>
import customButton from '../Components/Button.vue';
import score from '../Components/Score.vue';
export default {
    components: {
        customButton,
        score
    },
    name: 'result',
    data () {
        return {
            score: 0,
            replay: "replay",
            home: "home"
        }
    },
    created() {
        this.score = this.$route.params.score;
    },
    methods: {
        toSolo: function(){
            this.$router.push({path: 'solo'})
        },
        toHome: function(){
            this.$router.push({path: '/'})
        },
    }
}
</script>

<style scoped>
.result__title{
    height: 30px;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 25px;
}
</style>

