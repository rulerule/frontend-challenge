/* core */
import Vue from 'vue'
import App from './App.vue'

/* plugins and setups */
import './plugins/axios'
import axiosInstanceSetup from '@/network/axiosSetup'
import i18n from './plugins/i18n'

import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

/* define the axios instance */
axios = axiosInstanceSetup

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
