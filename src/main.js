import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueResource from 'vue-resource'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
