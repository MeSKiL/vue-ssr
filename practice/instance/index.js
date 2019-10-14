import Vue from 'vue'

const app = new Vue({
  // el:'#root',
  template:'<div ref="div">{{text}}{{obj.a}}</div>',
  data:{
    text:0,
    obj:{}, // 值未声明则赋值是非响应式
    // obj:{
    //   a:0
    // } 这样就不需要forceUpdate了
  },
  // watch:{
  //   text(newText,oldText){
  //     console.log(newText,oldText)
  //   }
  // }
});

app.$mount('#root');
let i = 0;
setInterval(()=>{
  i++;
  // app.text +=1;
  // app.obj.a = i;// 值未声明则赋值是非响应式,要用forceUpdate强制刷新
  // app.$forceUpdate();

  app.$set(app.obj,'a',i); // 这样声明，vue会给obj补上a为响应式的
  // app.$delete()

  app.$nextTick() // 用于值改变，但是dom没变时的调试

  // app.$options.data.text +=1; // 无效
  // app.$data.text += 1;
  // 直接用instance上调用的数据其实是代理到app.$data上的属性
},1000);

// console.log(app.$data);
// console.log(app.$props);
// console.log(app.$el);
// console.log(app.$options);

// app.$options.render = (h) => {
//   return h('div',{},'new render function')
// };
// 会在第一次有值改变后 执行
// console.log(app.$root===app); // 根节点
// console.log(app.$children);
// console.log(app.$slots);
// console.log(app.$scopedSlots);
// console.log(app.$refs);

// console.log(app.$isServer); // 是否是服务端渲染

// const unWatch = app.$watch('text',(newText,oldText)=>{
//   console.log(newText,oldText)
// });
// unWatch();
// 返回一个unWatch方法，调用后手动注销watch

// app.$on('test',(a,b)=>{
//   console.log(a,b)
// }); // 绑定事件
//
// app.$emit('test',1,2); // 触发事件

// app.$once('test',(a,b)=>{
//   console.log(a,b)
// }); // 绑定一次性事件
//
// setInterval(()=>{
//   app.$emit('test',1,2); // 只触发一次事件
// },1000);

// app.$forceUpdate();
// app.$destroy()； // 销毁实例
