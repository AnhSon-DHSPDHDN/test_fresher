import axios from 'axios';
import queryString from 'querystring';
import { APILink } from '../configs/config'

const axiosClient = axios.create({
  baseURL: APILink,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  paramsSerializer: param => queryString.stringify(param)
})

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access-token')
  config.headers['Authorization'] = `Bearer ${token}` || ''
  return config
})

axiosClient.interceptors.response.use((response) => {
  return response
}, async function (error) {
  if (error.response?.status === 401) {
    await localStorage.clear()
    document.location.href = '/login'
  }
  return Promise.reject(error.response?.data?.message)
})

export default axiosClient