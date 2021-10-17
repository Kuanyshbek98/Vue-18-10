import axios from 'axios' 

const service = axios.create({
  baseURL: 'http://185.111.106.47/api',
  timeout: 60*24*60
})

service.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/json' 
    return config
  }, 
)

export default service;