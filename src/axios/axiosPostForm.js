import axios from 'axios'

axios.default.baseURL = '' // api的base_url
axios.default.timeout = 5000 // request timeout
axios.interceptors.request.use(
  config => {
    // 根据实际项目修改拦截器
    console.log(config)
    config.data = config.data || {}
    return config
  },
  error => {
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    return Promise.reject(error)
  })

export function get(url, data) {
  return new Promise((resolve, reject) => {
    console.log('get' + url)
    console.log('get' + data)

    axios.get(url)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    console.log('post' + data)
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
export default axios
