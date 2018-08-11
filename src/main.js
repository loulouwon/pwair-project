import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Axios from 'axios'
import VueGeolocation from 'vue-browser-geolocation';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.prototype.$http = Axios
Vue.prototype.$location = VueGeolocation;

// Event Bus
export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




