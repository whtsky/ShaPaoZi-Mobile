import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'vue-infinite-scroll'
import * as filters from './filters'
import vmdl from 'vue-mdl'

vmdl.registerAll(Vue)

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})

Vue.http.options.root = 'http://www.shapaozi.me/api'

var router = new VueRouter({
  hashbang: true,
  history: false
})

import Home from './views/Home.vue'
import Search from './views/Search.vue'
// import Detail from './views/Detail.vue'

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/search/:text': {
    name: 'search',
    component: Search
  }
})

if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true
  Vue.http.options.root = '/api'
  // window.ga = function () {}
} else {
  router.afterEach(function (transition) {
    // window.ga('send', 'pageview', transition.to.path)
  })
}

router.start(App, 'app')
