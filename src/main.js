// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueJsonp from 'vue-jsonp'
import axios from 'axios'


Vue.use(ElementUI)
Vue.use(VueJsonp)

axios.defaults.baseURL = 'http://localhost:7777'
Vue.prototype.$ajax = axios
// Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
