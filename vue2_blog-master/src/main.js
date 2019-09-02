import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import index from './components/index.vue'
// eslint-disable-next-line camelcase
import d_edit from './components/d_edit.vue'
// eslint-disable-next-line camelcase
import m_edit from './components/m_edit.vue'
// eslint-disable-next-line camelcase
import m_show from './components/message_show.vue'
// eslint-disable-next-line camelcase
import d_show from './components/diary_show.vue'
import about from './components/about.vue'
// eslint-disable-next-line no-unused-vars
// import common_head from './components/common_head.vue'
import $ from 'jquery'
import './assets/js/bootstrap.min.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

// 注册组件
Vue.use(VueResource)
Vue.use(VueRouter)

// 路由
const routes = [{
  path: '/',
  component: index
},
{
  path: '/about',
  component: about
},
{
  path: '/login',
  component: login
},
{
  path: '/register',
  component: register
},
{
  path: '/message_board/m_edit',
  component: m_edit
},
{
  path: '/diary/d_edit',
  component: d_edit
},
{
  path: '/message_board/message_show',
  component: m_show
},
{
  path: '/diary/diary_show',
  component: d_show
}
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  router,
  components: {
    app: App
  },
  store,
  render: h => h(App)
}).$mount('#app')

