import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import solo from '../Components/solo.vue';
import multi from '../Components/multi.vue';
import home from '../Components/home.vue';

export default new Router({
	routes: [
		{path: '/', component: home},
        {path: '/solo', component: solo},
        {path: '/multi', component: multi}
	]
})