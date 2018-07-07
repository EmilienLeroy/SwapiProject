import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import solo from '../Pages/solo.vue';
import multi from '../Pages/multi.vue';
import generate from '../Pages/multi/generate.vue';
import connect from '../Pages/multi/connect.vue';
import game from '../Pages/multi/game.vue';
import home from '../Pages/home.vue';
import result from '../Pages/result.vue';
import resultMulti from '../Pages/multi/result.vue';

export default new Router({
	routes: [
		{path: '/', component: home},
        {path: '/solo', component: solo},
		{path: '/multi', component: multi},
		{path: '/multi/generate', component: generate},
		{path: '/multi/connect', component: connect},
		{name: 'game', path: '/multi/game',component:game},
		{name: 'resultMulti', path: '/multi/result',component:resultMulti},
		{name: 'result',path: '/result', component: result}
	]
})