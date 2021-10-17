import axios from 'axios'
import Cookies from 'js-cookie'

const service = axios.create({
  baseURL: 'http://back.neppe.kz/api/v1',
  timeout: 60*24*60
})



service.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/json'
    config.headers['Authorization'] = 'Bearer' + Cookies.get('menu-token')
    return config
  },
  error => {
    alert(error) // for debug
    return Promise.reject(error)
  }
)

export default service;
