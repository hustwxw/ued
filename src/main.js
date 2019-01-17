// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
window.$ = $;
import vuex from '@/vuex/index.js'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store: vuex.store,
	router,
	components: {
		App
	},
	template: '<App/>'
})