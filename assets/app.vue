<template>
	<main >
		
		<div class="header" id="particle">	
			<h1 class="header__title"  >Swapi quizz</h1>
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
import * as random from './modules/random.js';

export default {
	name: 'app',
	components: {home},
	mounted: function(){
		
	},
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
	font-family: starwars;
	font-size: 80px;
	letter-spacing: 5px;
	text-shadow: 0px 0px 15px #ffe900ed;
}

.block{
	padding: 0;
	text-align: center;
	height: 50%;
	padding-top: 50px;
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
