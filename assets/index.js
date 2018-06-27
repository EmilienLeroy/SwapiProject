import Vue from 'vue'
import app from './Components/app.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
	mounted() {

	}, 
	components: { app }, 
	template: "<app/>"
}).$mount("#app")