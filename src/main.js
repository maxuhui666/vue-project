import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './http/axios'
import api from './http/api'
import http from './http/http'
import enumStore from '@/assets/enumStore'
import './assets/style.scss'
import * as filters from './assets/filters'
import {
  Button,
  Input,
  InputNumber,
  Message,
  Form,
  FormItem,
  Row,
  Col,
  Icon,
  Menu,
  MenuItem,
  Submenu,
  Dialog,
  Select,
  Option,
  OptionGroup,
  Tree,
  Table,
  TableColumn,
  Switch
} from 'element-ui'

Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.prototype.$message = Message

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$enumStore = enumStore
Vue.prototype.$api = api
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
