import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import solo from '../Pages/solo.vue';
import multi from '../Pages/multi.vue';
import home from '../Pages/home.vue';

export default new Router({
	routes: [
		{path: '/', component: home},
        {path: '/solo', component: solo},
        {path: '/multi', component: multi}
	]
})