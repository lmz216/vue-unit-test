import axios from 'axios'

const service = axios.create({
	baseURL: '',
	timeout: 600000, // 请求超时时间
})

service.interceptors.request.use(
	config => {
		config.metadata = {
			startTime: new Date()
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		response.config.metadata.endTime = new Date()
		response.duration = response.config.metadata.endTime - response.config.metadata.startTime
		return response;
	},
	error => {
		error.config.metadata.endTime = new Date();
		error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
		return Promise.reject(error);
	}
)

export default service;
