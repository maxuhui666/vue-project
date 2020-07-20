import axios from "axios";
// 请求超时
axios.defaults.timeout = 5000;
// 增加请求默认路径前缀
axios.defaults.baseURL = "/api";
// 请求方式
const postMethod = new Map();
postMethod.set(1, "application/json; charset=utf-8");
postMethod.set(2, "application/x-www-form-urlencoded; charset=utf-8");

export default {
  get(url, params) {
    let options = {};
    if (params) {
      options.params = params;
    }
    return axios.get(url, options);
  },

  post(url, data, method = 1) {
    let options = {};
    options.headers = {
      headers: {
        "Content-Type": postMethod.get(method)
      }
    };
    return axios.post(url, data, options);
  }
};
