import axios from 'axios'
import map from '@/assets/constants'

const instance = axios.create({
	baseURL: map.ENDPOINT
})

/* FIXME cancel tokens, not sure if i will need to use them here, but just in case FIXME */
instance.CancelToken = axios.CancelToken
instance.isCancel = axios.isCancel

/* IMPORTANT Not sure yet if i ll use any kind of interceptors here but keep in mind this approach override cathes @actions FIXME */
instance.interceptors.response.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})

export default instance
