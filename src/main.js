import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import Vant from 'vant'
import 'vant/lib/index.css'

// 引入自己的http
import Http from './service/http'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(Vant)

import { Cell, CellGroup } from 'vant'

Vue.use(Cell).use(CellGroup)

// 有他就每一个组件的地方进行调用了
Vue.prototype.$Http=Http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
