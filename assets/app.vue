<template>
<main>
<h1>Swapi Project</h1>
<router-view/>
</main>
</template>

<script>
import home from './Pages/home.vue';

export default {
	name: 'app',
	components: {home},
	mounted: function(){
		
	}
}

</script>

<style scoped>

</style>
