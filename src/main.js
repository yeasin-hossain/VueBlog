import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from './components/Home'
import About from './components/about'
import Shanto from './components/shanto'
import Post from './components/post'
// vour router
Vue.use(VueRouter);
const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/shanto',
    component: Shanto
  },
  {
    path: '/post/:id',
    component: Post
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})
// vuex

Vue.use(Vuex)
import {
  storage
} from './store/index'
const store = new Vuex.Store(storage)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')