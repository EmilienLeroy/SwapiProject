<template>
    <div>
        <h2>ID: {{id}}</h2>
        <input v-model="name" placeholder="Username">
        <connectBtn v-bind:text="'connect'"  @click.native="connect()"></connectBtn>

    </div>
</template>

<script>
import io from 'socket.io-client';
import connectBtn from '../../Components/Button.vue';

export default {
    components:{
        connectBtn
    },
    mounted: function(){

        this.$http.get('/generateRoom').then(response => {
            this.id = response.body.id;
        })
    },

    data(){
        return {
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
