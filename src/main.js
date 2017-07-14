// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pl'
import App from './App'
import router from './router'
import store from './store'
import species from './data/species.json'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI, { locale })
Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('setSpecies', species)
    this.$store.dispatch('setActiveColumns', ['name', 'nameLatin', 'heightTypes', 'inflorescences', 'lwu'])
  }
})
