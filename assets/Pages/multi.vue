<template>
    <div>
    <p class="block__title">Play with your friend !</p>
        <div class="menu">
            <router-link class="menu__item menu__item--mulit" :to="'/multi/generate'">Create a new quizz</router-link>
            <router-link class="menu__item menu__item--mulit" :to="'/multi/connect'">Join a quizz</router-link>
        </div>
    </div>
</template>

<script>

export default {
    mounted: ()=>{
        
    }
}
</script>

<style>

</style>