import axios from "axios";
axios.defaults.timeout = 5000; // 请求超时
axios.defaults.baseURL = "/api"; // 增加请求默认路径前缀

export default {
  /**
   * get 请求=自定义请求头
   */
  getHeader(url, params, headers) {
    let options = {};

    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.get(url, options);
  },

  /**
   * get 请求=默认请求头
   */
  get(url, params) {
    let options = {};

    if (params) {
      options.params = params;
    }
    return axios.get(url, options);
  },

  /**
   * post 请求自定义请求头
   */
  postHeader(url, headers, data) {
    let options = {};
    if (headers) {
      options.headers = headers;
    }
    return axios.post(url, data, options);
  },
  /**
   * post 请求=默认请求头
   */
  post(url, data) {
    let options = {};
    options.headers = {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };
    return axios.post(url, data, options);
  }
};
