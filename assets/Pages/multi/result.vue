<template>
    <div class="result">
        <h2 class="result__title">Result</h2>
        <div>
            <ul class="game__list">
                <li v-for="(player, index)  in game.player" v-bind:key="index">
                    {{ player.name }} : {{player.score}}
                </li>
            </ul>
        </div>
        <customButton v-bind:text="home" @click.native="toHome"></customButton>
    </div>
</template>


<script>
import customButton from '../../Components/Button.vue';
export default {
    components: {
        customButton
    },
    mounted: function() {
        this.game = this.$route.params.game
    },
    data(){
        return{
            game: '',
            home: "home"
        }
    },
    methods: {
        toHome: function(){
            this.$router.push({path: '/'})
        },
    }
}
</script>

<style scoped>
.result__title{
    height: 50px;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 25px;
}
</style>

