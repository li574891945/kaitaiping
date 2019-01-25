import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register'
import Nofind from './views/404'
import Login from './views/Login'
import Home from './views/Home'
import InfoShow from './views/InfoShow'
import FoundList from './views/FoundList'
import Wel from './views/map/wel'
import WagesAndAttendance from './views/map/wagesAndAttendance'
import Attendance from './views/map/attendance'
import NativePlace from './views/map/nativePlace'
import Age from './views/map/age'
import Output from './views/map/output'
import Wave from './views/map/wave'
import Map from './views/map/map'
import Province from './views/map/province'
import City from './views/map/city'

const paths = '/kaitaiping/dist/';
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Nofind },
    { path: paths, redirect: '/index' },
    { path: paths + '/register', name: 'register', component: Register },
    { path: paths + '/login', name: 'login', component: Login },
    {
      path: paths + '/index',
      name: 'index',
      component: Index,
      children: [
        { path: paths, component: Map },
        { path: paths + '/map', name: 'map', component: Map },
        { path: paths +'/infoshow', name: 'infoshow', component: InfoShow },
        { path: paths +'/foundlist', name: 'foundlist', component: FoundList },
        { path: paths +'/wel', name: 'wel', component: Wel },
        { path: paths +'/wagesAndAttendance', name: 'wagesAndAttendance', component: WagesAndAttendance },
        { path: paths +'/attendance', name: 'attendance', component: Attendance },
        { path: paths +'/nativePlace', name: 'nativePlace', component: NativePlace },
        { path: paths +'/age', name: 'age', component: Age },
        { path: paths +'/output', name: 'output', component: Output },
        { path: paths +'/wave', name: 'wave', component: Wave },
        { path: paths +'/province', name: 'province', component: Province },
        { path: paths +'/city', name: 'city', component: City }
      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].data) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router;
