import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

import createRouter from './config/router'


import createStore from './store/store'
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

// store.registerModule('c',{
//   state:{
//     text:3
//   }
// }); // 动态注册模块

// store.unregisterModule('c'); // 解绑

// store.watch((state)=>state.count+1,(newCount)=>{ // 当第一个方法的返回值有改变时，第一个方法的返回值会当作参数传入第二个方法
//   console.log('new count watched:',newCount)
// });


// vuex发起action或mutation时，第二个参数必须是一个对象或数组，是因为这样才可以明显的显示出mutation.payload
store.subscribe((mutation,state)=>{ // 调用mutation时触发
  console.log(mutation.type);
  console.log(mutation.payload);
});

store.subscribeAction((action,state)=>{
  console.log(action.type);
  console.log(action.payload);
});

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
  store,
  render: (h) => h(App)
}).$mount('#root');
