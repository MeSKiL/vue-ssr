import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'


import './assets/styles/global.styl'

import createRouter from './config/router'

Vue.use(VueRouter);

const router = createRouter();


// 守卫导航钩子
router.beforeEach((to,from,next)=>{ // 验证之类的
  console.log('before each invoked');
  // if(to.fullPath==='/app'){
  //   next({path:'/login'}) // 可以传的值与routers定义的一样
  // }else{
  //   next();
  // }
  next(); // 执行才会跳转
});

router.beforeResolve((to,from,next)=>{
  console.log('before resolve invoked');
  next(); // 执行才会跳转
});

router.afterEach((to,from)=>{
  console.log('after each invoked')
});

new Vue({
  router, // 注入router
  render: (h) => h(App)
}).$mount('#root');
