import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/form_manage'
const postMethod = new Map()
postMethod.set(1, 'application/json; charset=utf-8')
postMethod.set(2, 'application/x-www-form-urlencoded; charset=utf-8')

export default {
  get (url, params) {
    const options = {}
    if (params) {
      options.params = params
    }
    return axios.get(url, options)
  },

  post (url, data, method = 1) {
    const options = {}
    options.headers = {
      headers: {
        'Content-Type': postMethod.get(method)
      }
    }
    return axios.post(url, data, options)
  }
}
