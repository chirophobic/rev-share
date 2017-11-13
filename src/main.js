import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Index from './pages/Index.vue'
import SharedBar from './pages/SharedBar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/:hash', component: SharedBar}
]

const router = new VueRouter({ routes })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
