import Vue from 'vue'
import Vuex from 'vuex'

/* modules */
import transcriptionModule from './modules/transcription'

/* NOTE: generics are in their own file, cause if we end up getting a lot of
generic state handling, this file doesnt become a scroll adventure */
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
	state: { /* generic state */ },
	getters,
	mutations,
	actions,
	modules: {
		transcriptionModule
	}
})
