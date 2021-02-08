import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
//Axios
import Axios from "axios";

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if(token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
  "Bearer " + token;
}

Vue.config.productionTip = false

new Vue({
  // store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
