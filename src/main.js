// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui';
import echarts from 'echarts'
require('echarts/theme/macarons');
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts 
Vue.prototype.hub = new Vue();
Vue.prototype.$ajax = axios;
Vue.prototype.envPath = 'http://10.10.91.51:8100';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
