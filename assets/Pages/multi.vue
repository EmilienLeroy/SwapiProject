<template>
    <div>
    <h1>Multi</h1>
    <p class="block__title">Play with our friend !</p>
        <div class="menu">
            <router-link class="menu__item" :to="'/multi/generate'">Generate a new game</router-link>
            <router-link class="menu__item" :to="'/multi/connect'">Connect an existant game</router-link>
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