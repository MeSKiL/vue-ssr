import Vue from 'vue'

const component = { // 组件实现双向绑定
    model: {
        prop: 'value1',
        event:'change'
    },
    props: {
        value: String,
        value1:String
    },
    template: `
        <div>
            <input type="text" @input="handleInput" :value="value1"/>
        </div>
    `,
    methods: {
        handleInput(e) {
            this.$emit('change', e.target.value)
        }
    }
};

new Vue({
    components: {
        CompOne: component
    },
    template: `
        <div>
            <!--<comp-one :value="value" @input="value=arguments[0]"></comp-one>-->
            <comp-one v-model="value"></comp-one>
        </div>
    `,
    data() {
        return {
            value: '123'
        }
    }
}).$mount('#root');
