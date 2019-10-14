import Vue from 'vue'

new Vue({
  template: `
        <div>
          <div v-once>{{text}}</div>
          <!--只绑定一次,节约性能开销-->
        
          <div v-pre>{{text}}</div>
          <!--不解析内容-->
          
          <div v-cloak>Text:{{text}}</div>
          <!--webpack用不到,vue还没加载完成之前，隐藏代码-->
          
          
          <div v-text="'Text:'+text" v-show="active" v-on:click=""></div>
          <div>{{text}}</div>
          <!--vue判断绑定v-on的组件，如果是原生的话就addEventListener 如果是vue组件，就在他的实例上添加click监听-->
          
          
          <div v-html="html" v-if="active"></div>
          <div v-else-if="text===0">else if content</div>
          <div v-else>else content</div>
          
          <!--修饰符-->
          <input v-text="text" v-model.number="text" />
          <input v-text="text" v-model.trim="text" />
          <input v-text="text" v-model.lazy="text" />
          <!--.lazy相当于绑定了onChange v-model相当于绑定了onInput-->
          
          <input type="checkbox" v-model="active" />
          <div>
            <input type="checkbox" :value="1" v-model="arr" />
            <input type="checkbox" :value="2" v-model="arr" />
            <input type="checkbox" :value="3" v-model="arr" />
          </div>
          <div>
            <input type="radio" value="one" v-model="picked" />
            <input type="radio" value="two" v-model="picked" />
          </div>
          <ul>
            <li v-for="(item,index) in arr" :key="index">{{item}}</li>
          </ul>
          <ul>
            <li v-for="(value,key,index) in obj" :key="key">{{key}}:{{value}}:{{index}}</li>
          </ul>
        </div>
  `,
  data: {
    picked:'',
    arr: [1, 2, 3],
    obj:{
      a:1,
      b:2,
      c:3,
      d:4
    },
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
}).$mount('#root');

// v-show 显示与否 v-if dom节点存在与否 如果控制显示与否用v-show 否则使用v-if修改dom，性能开销很大
