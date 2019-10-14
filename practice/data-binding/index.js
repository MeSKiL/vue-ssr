import Vue from 'vue'

new Vue({ // vue 有自己的白名单，可以调用某些全局变量
  // template:`<div v-bind:id="aaa" v-on:click="handleClick">{{Date.now()}}<p v-html="html"></p></div>`,
  // template: `<div :class="{active:isActive}">{{Date.now()}}<p v-html="html"></p></div>`,
  template: `<div :class="[{active:isActive}]" :style="[styles,styles2]">{{Date.now()}}{{getJoinedArr(arr)}}<p v-html="html"></p></div>`,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: `<span>123</span>`,
    aaa: 'main',
    styles:{
      color:'red'
    },
    styles2:{
      fontSize:30+'px'
    },
  },
  methods: {
    handleClick() {
      console.log('click');
    },
    getJoinedArr(arr){
      return arr.join(' ');
    }
  }
}).$mount('#root');
