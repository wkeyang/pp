import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import select from '@/components/select/select'  //下拉框
import pagination from '@/components/pagination/pagination'  //下拉框

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },{
      path:'/pagination',
      name:'pagination',
      component:pagination
    }
  ]
})
