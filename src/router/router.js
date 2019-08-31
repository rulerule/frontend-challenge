import Vue from 'vue'
import Router from 'vue-router'

/* Modules */
import transcriptionModule from '@/router/modules/transcription'

Vue.use(Router)

/* if we had single routes that wouldnt really fit into a single module
we could setup them here */
const baseRoutes = []

/* merge the baseRoutes with the ones from modules */
const routes = baseRoutes.concat(
	transcriptionModule
)

export default new Router({ routes })
