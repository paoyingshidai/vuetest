import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Layout from '../components/element/Layout'
import Nav from '../components/element/Nav'
import LeftNav from '../components/element/nav/LeftNav'

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
          name: 'nav',
          component: Nav,
          children: [
            {
              path: 'leftnav',
              name: '',
              component: LeftNav
            }
          ]
        }
      ]
    }
  ]
})
