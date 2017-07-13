import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip({container: 'body'})
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
