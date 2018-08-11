import Vue from 'vue'
import VueRouter from 'vue-router';

// Router Components
import Login from './components/Login.vue';
import Main from './components/Main.vue';

Vue.use(VueRouter);

const routes = [
  { path : '/', component: Login },
  { path : '/Main', component: Main },
]

export const router = new VueRouter({
  routes,
  // get rid of #
  mode: 'history'
});
