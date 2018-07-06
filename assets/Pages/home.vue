<template>
    <div>
        <p class="block__title">Are you a fan of Star Wars ?</p>
        <div class="menu">
            <router-link class="menu__item" :to="'/solo'">Solo</router-link>
            <router-link class="menu__item" :to="'/multi'">Multi</router-link>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style>

.menu__item{
	padding: 0.75em 3em;
    border-radius: 2em;
    display: inline-block;
    color: #e2c963;
    background-color: transparent;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #e2c963;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 20px;
    margin: 10px;
}

.menu__item:hover{
    color: #1c0e03;
    background-color: #e2c963;
    transition: all 0.15s ease;
}

.block__title{
	color: #e2c963;
	font-family: helvetica neue,Helvetica,Arial,sans-serif;
	font-size: 20px;
}
</style>


