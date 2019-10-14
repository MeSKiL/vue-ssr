import Vue from 'vue'

const component = {
    props:{
        active:Boolean,
        propOne:String
    },
    template:`
        <div>
            <input type="text" v-model="text" />
            <span @click="handleChange">{{propOne}}</span>
            <span v-show="active">see me if active</span>
        </div>
    `,
    data(){
        return {
            text:0
        }
    },
    mounted(){
        console.log('Comp mounted')
        console.log(this.$parent.$options.name)

    },
    methods:{
        handleChange(){
            this.$emit('change')
        }
    }
};

const parent = new Vue({
    name:'parent'
});

const component2 = {
    name:'comp2',
    extends:component,
    mounted(){
        console.log(this.$parent.$options.name);
        console.log(this.$parent)
        this.$parent.text = 'text2'
    },
    data(){
        return{
            text:1
        }
    }
};

// const CompVue = Vue.extend(component);

// new CompVue({
//     propsData:{ // 往组件内部传值
//         propOne:'xxx'
//     },
//     data:{
//         a:1
//     }, // 合并覆盖
//     mounted(){
//         console.log('instance mounted')
//     }, // 先走组件内部的mounted
// }).$mount('#root');

new Vue({
    parent, // 通过new Vue可以指定parent
    name:'Root',
    components:{
        Comp:component2
    },
    data:{
        text:'text1'
    },
    template: `<div>
                   <comp propOne="123"/>
                   <div>{{text}}</div>
               </div>`,
    mounted(){
        console.log(this.$parent.$options.name);
    },
}).$mount('#root');

// extend || extends 修改组件而不需要重写
