import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from '@/router'
import VueCustomElement from 'vue-custom-element';
import '@yzfe/svgicon/lib/svgicon.css'
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@/plugins/firebase'
import store from '@/plugins/vuex'

Vue.use(VueCustomElement)

Vue.config.productionTip = false

Vue.component('icon-svg', VueSvgIcon)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  beforeCreate: () => {
    store.dispatch('services/fetchServices')
  },
}).$mount('#app')
