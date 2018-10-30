import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  /^ion-/
]

import ConvenienceImage from 'convenience-image'
Vue.use(ConvenienceImage)

new Vue({
  render: h => h(App)
}).$mount('#app')