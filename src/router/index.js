import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Layout from '../components/element/Layout'
import Nav from '../components/element/Nav'
import LeftNav from '../components/element/nav/LeftNav'
import Table from '../components/element/table/Table'
Vue.use(Router);

// noinspection JSUnresolvedVariable
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/router/:id',
          name: 'ROUTE',
          component: Layout
        },
        {
          path: '/element/nav',
          component: Nav,
          children: [
            {
              path: 'leftnav',
              name: '',
              component: LeftNav
            },
            {
              path: 'table',
              component: Table
            }
          ]
        }
      ]
    }
  ]
})
