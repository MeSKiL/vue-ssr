import Vue from 'vue'

const ChildComponent = {
    template:`<div>child component{{data.value}}</div>`,
    inject:['yeye','data'],
    mounted(){
        console.log(this.yeye,this.data.value)
    }
};

const component = {
    name:'Comp',
    components:{
        ChildComponent
    },
    // 具名插槽
    // template: `
    //     <div :style="style">
    //         <div class="header">
    //             <slot name="header" />
    //         </div>
    //         <div class="body">
    //             <slot name="body" />
    //         </div>
    //         <slot />
    //     </div>
    // `,

    // 作用域插槽
    template: `
        <div :style="style">
            <slot :value="value" aaa="111"/>
            <child-component />
        </div>
    `,
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            },
            value: 'component value'
        }
    }
};

new Vue({
    components: {
        CompOne: component
    },
    provide(){ // 不提供响应式，可以手动实现但是不推荐
        const data = {};
        Object.defineProperty(data,'value',{
            get:() => this.value,
            enumerable:true
        });
        return{
            yeye:this,
            data
        }
    },
    data() {
        return {
            value: '123'
        }
    },
    // template: `
    //     <div>
    //         <comp-one>
    //         <!--具名插槽-->
    //             <span slot="header">this is header content</span>
    //             <span slot="body">this is body content</span>
    //         </comp-one>
    //     </div>
    // `

    mounted(){
        console.log(this.$refs.comp,this.$refs.span)
    },

    // 作用域插槽
    template: `
        <div>
            <comp-one ref="comp">
                <span slot-scope="props" ref="span">{{props.value}},{{props.aaa}},{{value}}</span>
            </comp-one>
            <input type="text" v-model="value" />
        </div>
    `
}).$mount('#root');
