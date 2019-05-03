import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.prototype.store = {
  user: 'user',
  userID: '',
  eventID: '',
  eventname: '',
  eventlocation: '',
  eventdate: '',
  taskID: null
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')