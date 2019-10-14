import Vue from 'vue'

const component = {
    props: {
        active: {
            // type: Boolean,
            default: false,
            require:true,
            validator(value){
                return typeof value=== 'boolean'
            }
        },
        propOne:{
            type:String,
            default:'',
            require:true
        },
    },
    template: `<div>
                <span v-if="active">see me if active</span>
                <p @click="handleChange">{{propOne}}</p>
            </div>`,
    data() {
        return {
            text: '123'
        }
    },
    methods:{
        handleChange(){
            // this.onChange()
            this.$emit('change')
        }
    }
};
// Vue.component('CompOne',component);
// 全局设置组件

new Vue({
    components: {
        CompOne: component
    },
    data:{
        prop1:'text1'
    },
    mounted(){
      console.log(this.$refs.comp1)
    },
    template: '<comp-one ref="comp1" :active="false" :prop-one="prop1" @change="handleChange"/>',
    methods:{
        handleChange(){
            this.prop1 = 'text2'
        }
    }
}).$mount('#root');
