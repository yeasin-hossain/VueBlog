import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/about'
import Shanto from './components/shanto'

Vue.use(VueRouter);
const routes=[
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/shanto',component:Shanto}

]

const router = new VueRouter({
  mode:'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
