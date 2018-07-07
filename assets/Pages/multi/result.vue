<template>
    <div>
        <h2>Result</h2>
        <div>
            <ul>
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
