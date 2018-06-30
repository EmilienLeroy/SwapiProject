import Vue from 'vue'
import app from './app.vue'
import router from './Router/router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
	router,
	mounted() {

	}, 
	components: { app }, 
	template: "<app/>"
}).$mount("#app")

