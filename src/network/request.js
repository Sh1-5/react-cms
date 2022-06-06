import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    const token = JSON.parse(window.localStorage.getItem('token'))
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (res) => {
    return res.data.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
