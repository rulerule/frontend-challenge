import Vue from 'vue'
import Router from 'vue-router'

/* Modules */
import homeModule from '@/router/modules/home'

Vue.use(Router)

/* if we had single routes that wouldnt really fit into a single module
we could setup them here */
const baseRoutes = []

/* merge the baseRoutes with the ones from modules */
const routes = baseRoutes.concat(
	homeModule
)

export default new Router({ routes })
