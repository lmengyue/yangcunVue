// The Vue build version to load with the `import` command
//(runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import './assets/css/head.css'
import './assets/css/login.css'
import router from './router'
import VueClipboard from 'vue-clipboard2'

//require('./mock')  //可以不写./mock/index ,因为会默认选择index文件名

Vue.use(VueClipboard);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
