import Vue from 'vue'


const component = {
    props:['prop1'],
    name: 'Comp',
    // 作用域插槽
    // template: `
    //     <div :style="style">
    //         <slot/>
    //     </div>
    // `,
    render(createElement){
        return createElement('div',{
            style:this.style,
            // on:{
            //     click:()=>{
            //         this.$emit('click')
            //     }
            // }
        },[this.$slots.header,this.prop1]) // 没有名字的时候是default
    },
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
    data() {
        return {
            value: '321'
        }
    },

    mounted() {
        console.log(this.$refs.comp, this.$refs.span)
    },
    methods:{
        handleClick() {
            console.log('clicked')
        }
    },
    // 作用域插槽
    // template: `
    //         <comp-one ref="comp">
    //             <span ref="span">{{value}}</span>
    //         </comp-one>
    // `,

    render(createElement) {
        return createElement('comp-one', {
                ref: 'comp',
                props:{
                    prop1:this.value
                },
            // on:{
            //         click:this.handleClick
            // },
            nativeOn:{ // 会自动绑在组件根节点的原生的dom上
                    click:this.handleClick
            }
            }, [
                createElement('span', {
                    ref: 'span',
                    slot:'header',
                    // domProps:{ // 和原生dom类似
                    //     innerHTML:'<span>555</span>'
                    // },
                    attrs:{
                        id:'test-id'
                    }
                }, this.value)
            ]
        )
    }
}).$mount('#root');
