import Vue from 'vue'
{{#isEnabled plugins 'axios'}}
import axios from 'axios'
{{/isEnabled}}
{{#isEnabled plugins 'element-ui'}}
import Element from 'element-ui'
{{/isEnabled}}

import App from './App'
{{#isEnabled plugins 'vue-router'}}
import router from './router'
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
import store from './store'
{{/isEnabled}}
{{#isEnabled plugins 'mockjs'}}
import './api/mock'
{{/isEnabled}}
{{#isEnabled plugins 'element-ui'}}
import 'element-ui/lib/theme-chalk/index.css'
{{/isEnabled}}
import './style/index.scss'

{{#isEnabled plugins 'vue-electron'}}
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
{{/isEnabled}}
{{#isEnabled plugins 'element-ui'}}
Vue.use(Element, {size: "small"})
{{/isEnabled}}
{{#isEnabled plugins 'axios'}}
Vue.http = Vue.prototype.$http = axios
{{/isEnabled}}
Vue.config.productionTip = false

Vue.openLink = (url) => {
  try {
    if (process.env.BUILD_TARGET !== 'web') { require('electron').shell.openExternal(url) }
  } catch (e) {
    window.open(url)
  }
}
Vue.prototype.$openLink = Vue.openLink

/* eslint-disable no-new */
new Vue({
  components: { App },
  {{#isEnabled plugins 'vue-router'}}
  router,
  {{/isEnabled}}
  {{#isEnabled plugins 'vuex'}}
  store,
  {{/isEnabled}}
  template: '<App/>'
}).$mount('#app')
