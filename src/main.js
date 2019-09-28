// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import './directives/index.js'

import './components' // ./components/index.js

// 引入 store/index.js 的默认值
import store from './store'

import VueSweetalert2 from './plugins/vue-sweetalert2'

// 引入插件
import Message from './plugins/message'

import './filters'

// 使用插件
Vue.use(VueSweetalert2)

// 使用插件
Vue.use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 注入 store
  store,
  components: { App },
  template: '<App/>'
})
