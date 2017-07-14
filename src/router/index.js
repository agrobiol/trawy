import Vue from 'vue'
import Router from 'vue-router'
import SpeciesTable from '@/components/SpeciesTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SpeciesTable',
      component: SpeciesTable
    }
  ]
})
