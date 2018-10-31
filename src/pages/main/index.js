import Vue from 'vue'
import App from './App'
import Base from '../../service/base'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  /^ion-/
]

import ConvenienceImage from 'convenience-image'
Vue.use(ConvenienceImage)
Vue.use(Base)

new Vue({
  render: h => h(App)
}).$mount('#app')