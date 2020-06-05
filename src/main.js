import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./http/axios";
import api from "./http/api";
import http from "./http/http";
import "./assets/style.scss";
import * as filters from "./assets/filters";

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.prototype.$api = api;
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
