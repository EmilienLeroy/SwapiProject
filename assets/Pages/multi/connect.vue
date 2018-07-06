<template>
    <div>
        <input v-model="id" placeholder="Game Id">
        <input v-model="name" placeholder="Username">
        <connectBtn v-bind:text="'connect'"  @click.native="connect()"></connectBtn>
    </div>
</template>

<script>
import connectBtn from '../../Components/Button.vue';
export default {
    components:{
        connectBtn
    },
    data(){
        return{
            id: '',
            name: ''
        }
    },
    methods: {
        connect: function(){
            this.$router.push({name: 'game', params: { id: this.id, name: this.name }})
        }
    }
}
</script>
