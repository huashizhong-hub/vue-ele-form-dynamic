import Vue from 'vue'
import App from './App.vue'
import YdForm from 'vue-yd-form'
import ElementUI from 'element-ui'
import EleFormDynamic from '../src/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(YdForm)
Vue.component('dynamic', EleFormDynamic)

new Vue({
  render: h => h(App)
}).$mount('#app')
