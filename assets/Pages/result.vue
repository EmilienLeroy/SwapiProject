<template>
    <div>
        <h2>Result</h2>
        <h3>your score: {{score}}/5</h3>
        <customButton v-bind:text="replay" @click.native="toSolo"></customButton>
        <customButton v-bind:text="home" @click.native="toHome"></customButton>
    </div>
</template>

<script>
import customButton from '../Components/Button.vue';
export default {
    components: {
        customButton
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
