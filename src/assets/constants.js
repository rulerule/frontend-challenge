const ENDPOINT = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

const PATHS = {
	BASE: '/'
}

const ACTIONS = {
	TRANSCRIPTIONS_FETCH: 'transcriptionsFetch',
	TRANSCRIPTIONS_UPLOAD: 'transcriptionsUpload',
	TRANSCRITPIONS_ADD_TABLE_ROW: 'transcriptionsAddTableRow',
	TRANSCRIPTIONS_UPDATE_JUST_CREATED: 'transcriptionsUpdateJustCreatedStatus'
}

export default {
	ENDPOINT: ENDPOINT,
	PATHS: PATHS,
	ACTIONS: ACTIONS
}
