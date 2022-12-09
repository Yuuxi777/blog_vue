import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import axios from 'axios';
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.axios = axios;
Vue.config.productionTip = false
axios.defaults.baseURL="http://localhost:8081";
Vue.use(mavonEditor)
Vue.use(Element);

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
