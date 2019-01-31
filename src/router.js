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

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Nofind },
    { path: '/', redirect: '/index' },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', name: 'map', component: Map },
        { path: '/map', name: 'map', component: Map },
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
        { path: '/foundlist', name: 'foundlist', component: FoundList },
        { path: '/wel', name: 'wel', component: Wel },
        { path: '/wagesAndAttendance', name: 'wagesAndAttendance', component: WagesAndAttendance },
        { path: '/attendance', name: 'attendance', component: Attendance },
        { path: '/nativePlace', name: 'nativePlace', component: NativePlace },
        { path: '/age', name: 'age', component: Age },
        { path: '/output', name: 'output', component: Output },
        { path: '/wave', name: 'wave', component: Wave },
        { path: '/province', name: 'province', component: Province },
        { path: '/city', name: 'city', component: City }
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
    switch(to.name){
      case "map":
        // this.$store.dispatch("setNavmenuIndex", '0');
        localStorage.setItem("setNavmenuIndex", '0');
        break;
      case "city":
        // this.$store.dispatch("setNavmenuIndex", '10');
        localStorage.setItem("setNavmenuIndex", '10');
        break;
      case "output":
        // this.$store.dispatch("setNavmenuIndex", '4');
        localStorage.setItem("setNavmenuIndex", '4');
        break;
      case "wave":
        // this.$store.dispatch("setNavmenuIndex", '6');
        localStorage.setItem("setNavmenuIndex", '6');
        break;
      case "attendance":
        // this.$store.dispatch("setNavmenuIndex", '5');
        localStorage.setItem("setNavmenuIndex", '5');
        break;
      case "wagesAndAttendance":
        // this.$store.dispatch("setNavmenuIndex", '1');
        localStorage.setItem("setNavmenuIndex", '1');
        break;
      case "nativePlace":
        // this.$store.dispatch("setNavmenuIndex", '2');
        localStorage.setItem("setNavmenuIndex", '2');
        break;
      case "age":
        // this.$store.dispatch("setNavmenuIndex", '3');
        localStorage.setItem("setNavmenuIndex", '3');
        break;
    }
    isLogin ? next() : next("/login");
  }
})

export default router;
