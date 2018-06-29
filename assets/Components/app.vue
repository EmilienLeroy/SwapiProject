<template>
<main>
<h1>Swapi Project</h1>
<router-view/>
</main>
</template>

<script>
import home from './home.vue';

export default {
	name: 'app',
	components: {home},
	mounted: function(){
		this.$http.get("https://swapi.co/api/people/1/").then((response) =>{
			console.log(response.body)
		})
	}
}

</script>

<style scoped>

</style>
