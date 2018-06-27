<template>
<main>
<h1>Swapi Project</h1>

</main>
</template>

<script>
export default {
	name: 'app',
	mounted: function(){
		console.log("product");
		this.$http.get("https://swapi.co/api/people/1/").then((response) =>{
			console.log(response.body)
		})
	}
}

</script>

<style scoped>

</style>
