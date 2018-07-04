<template>
	<main>
		<div class="header">	
			<h1 class="header__title">SWAPI QUIZ</h1>
		</div>
		<div class="block">
			
			<div>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
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

main{
	height: 100vh;
}

.header{
	padding: 30px;
	padding-bottom: 5px;
	text-align: center;
}

.header__title{
	font-family: helvetica neue,Helvetica,Arial,sans-serif;
	font-size: 60px;
}

.block{
	padding: 0;
	text-align: center;
	height: 50%;
}



.slide-enter-active, .slide-leave-active {
  	transition: opacity 1s, transform 1s;
}
.slide-enter {
	opacity: 0;
	transform: translateX(30%);
}

.slide-leave-to{
	opacity: 0;
	transform: translateX(-30%);
}


</style>
