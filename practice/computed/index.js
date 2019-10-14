import Vue from 'vue'

new Vue({
  template: `<div>p
               <p>Name:{{name}}</p>
               <p>Name:{{getName()}}</p>
               <p>Number:{{number}}</p>
               <p>FullName:{{fullName}}</p>
               <p><input type="text" v-model="number" /></p>
               <p>FirstName:<input type="text" v-model="firstName" /></p>
               <p>LastName<input type="text" v-model="lastName" /></p>
               <p>Name<input type="text" v-model="name" /></p>
               <p>Obj.a<input type="text" v-model="obj.a" /></p>
             </div>`,
  data: {
    firstName: 'a',
    lastName: 'b',
    number: 0,
    fullName:'',
    obj:{
      a:'123'
    }
  },
  computed: {
    name: { // 依赖不变则不会执行,性能开销小
      get(){
        console.log('new name');
        return `${this.firstName} ${this.lastName}`
      },
      set(name){ // 不建议
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  watch:{
    firstName(newName,oldName){
      this.fullName = newName + ' ' +this.lastName
    },
    lastName:{
      handler(newName,oldName){
        this.fullName = this.firstName + ' ' +newName
      },
      immediate:true, // 不设置为true，绑定的时候不执行handle
    },
    // obj:{
    //   handler(){ // 不用deep则只监听引用的变化
    //     console.log('obj.a changed')
    //   },
    //   immediate:true, // 不设置为true，绑定的时候不执行handle
    //   deep:true // 性能开销大
    // },
    'obj.a':{
      handler(){ // 不用deep则只监听引用的变化
        console.log('obj.a changed')
      },
      immediate:true, // 不设置为true，绑定的时候不执行handle
    },
  },
  methods: {
    getName() {
      console.log('new getName')
      return `${this.firstName}+${this.lastName}`
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  }
}).$mount('#root');
