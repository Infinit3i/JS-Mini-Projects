import Vue from 'vue'
import App from './App'
import { store } from './store/store'

window.eventBus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  components: { App },
  render: h => h(App)
})
