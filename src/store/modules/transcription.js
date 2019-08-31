const state = {
	transcriptionsData: []
}
const getters = {
	transcriptionsGetData: state => { return state.transcriptionsData }
}

const mutations = {
	transcriptionsFetch: (state, payload) => { state.transcriptionsData = payload },
	transcriptionsAddTableRow: (state, payload) => {
		state.transcriptionsData = [...state.transcriptionsData, payload]
	},
	transcriptionsUpdateJustCreatedStatus: (state, payload) => {
		state.transcriptionsData = state.transcriptionsData.map(element => {
			return {
				...element,
				justCreated: false
			}
		})
	}
}

const actions = {
	/* fetch the data from the server (mock) */
	transcriptionsFetch: (context, payload) => {
		const request = axios({ method: 'GET' })
		request.then(res => { context.commit('transcriptionsFetch', res.data) })
	},
	/* TODO */
	transcriptionsUpload: (context, payload) => {
		const request = axios({
			method: 'POST'
		})
		console.log(request)
	},
	/* Creates a new entry */
	transcriptionsAddTableRow: (context, payload) => {
		/* NOTE: i need to generate a temporary id here to give as key
           so i ll just put together all the ids i already have.
           I ll assume this id would later on be ignored by the server
           that would create the real id.
           Otherway would be better to just random generate them, since 2 users
           creating differente transcriptions at the same time would result
           in the second one not being able to create due to replication of ids
        */
		var newEntry = {
			voice: '',
			text: '',
			justCreated: true /* this is used so the component knows to focus the input */
		}
		if (state.transcriptionsData.length === 0) {
			newEntry.id = 1
		} else {
			const myId = state.transcriptionsData.reduce((newId, element) => {
				return newId + element.id
			}, 0)
			newEntry.id = myId
		}
		context.commit('transcriptionsAddTableRow', newEntry)
	},
	/* Updated just created
    it will just put the justCreated variable of all transcriptions to false
    so we make sure they just have that status the moment after being created
    */
	transcriptionsUpdateJustCreatedStatus: (context, payload) => {
		context.commit('transcriptionsUpdateJustCreatedStatus')
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
