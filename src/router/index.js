import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import RadioGroup from '@/components/RadioGroup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/radioGroup',
      name: 'RadioGroup',
      component: RadioGroup
    }
  ]
})
