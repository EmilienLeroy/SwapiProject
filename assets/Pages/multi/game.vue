<template>
    
</template>

<script>
import io from 'socket.io-client';

export default {    
    created() {
        let self = this;
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;
        this.socket = io.connect('http://localhost:8888');
        this.socket.on('connect', function() {
            self.socket.emit('room', self.id);
        });
        console.log(this.id + this.name)
    },
    data(){
        return{
            id: '',
            name: '',
            socket: null
        }
    }
}
</script>
