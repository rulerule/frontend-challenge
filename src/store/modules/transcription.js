const state = {
	transcriptionsData: []
}
const getters = {
	getTranscriptionsData: state => {
		return state.transcriptionsData
	}
}

const mutations = {
	fetchTranscriptionsData: (state, payload) => {
		state.transcriptionsData = payload
	}
}

const actions = {
	fetchTranscriptionsData: (context, payload) => {
		const request = axios({
			method: 'GET'
		})
		request.then(res => {
			context.commit('fetchTranscriptionsData', res.data)
		})
	},
	/* TODO */
	uploadTranscriptionsData: (context, payload) => {
		const request = axios({
			method: 'POST'
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
