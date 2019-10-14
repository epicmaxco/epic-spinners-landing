import Vue from 'vue'
import Router from 'vue-router'
import LoadersGallery from '@/components/LoadersGallery'
import LoadersGetStarted from '@/components/LoadersGetStarted'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: LoadersGallery
    },
    {
      path: '/get-started',
      name: 'GetStarted',
      component: LoadersGetStarted
    },
    {path: '*', redirect: { name: 'Gallery' }}
  ]
})
