<template>
	<main>
		<div class="header">	
			<h1 class="header__title">SWAPI QUIZ</h1>
		</div>
		<div class="block">
			<p class="block__title">Are you a fan of Star Wars ?</p>
			<div >
				<transition name="slide">
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

.block__title{
	color: #e2c963;
	font-family: helvetica neue,Helvetica,Arial,sans-serif;
	font-size: 20px;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}


</style>
