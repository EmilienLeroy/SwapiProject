<template>
    <div>
        <button class="button">{{text}}</button>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
.button{
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

.button:hover{
    color: #1c0e03;
    background-color: #e2c963;
    transition: all 0.15s ease;
}
</style>


