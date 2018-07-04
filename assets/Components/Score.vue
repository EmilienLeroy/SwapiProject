<template>
    <div>
        <span class="score">Score: {{ score }} / 5</span>
    </div>
</template>


<script>
export default {
    props: ['score']
}
</script>

<style scoped>
.score{
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
}
</style>

