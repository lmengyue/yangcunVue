import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/view/index/index');
const Home = () => import('@/view/home/home');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
          {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
