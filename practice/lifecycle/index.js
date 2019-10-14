import Vue from 'vue'

const app = new Vue({
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    console.log(this.$el, 'beforeCreate')
  },
  created() {
    console.log(this.$el, 'created')
  },
  // 创建

  beforeMount() {
    console.log(this.$el, 'beforeMount')
  },
  mounted() {
    console.log(this.$el, 'mounted')
  },
  // 挂载页面,服务端渲染不调用

  beforeUpdate() {
    console.log(this, 'beforeUpdate')
  },
  updated() {
    console.log(this, 'updated')
  },
  // 数据更新


  activated() {
    console.log(this, 'activated')
  },
  deactivated() {
    console.log(this, 'deactivated')
  },
  // keep-alive


  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  destroyed() {
    console.log(this, 'destroyed')
  },
  // 销毁

  render(h){
    // throw new TypeError('render error');
    console.log('render');
    return h('div',{},this.text)
  },

  renderError(h,err){ // 本组件出现错误会报错
    // 正式环境不使用，调试render错误
    return h('div',{},err.stack)
  },

  errorCaptured(){ // 收集线上错误
    // 会冒泡，并且正式环境会使用根组件有这个方法的话，所有子组件都能捕获到
  }
});

app.$mount('#root');


// setInterval(() => {
//   app.text += 1
// },1000)

setTimeout(()=>{
  app.$destroy() // 销毁实例
},1000)
