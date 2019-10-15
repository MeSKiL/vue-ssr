import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development';

export default ()=>{
    const store =  new Vuex.Store({
        strict:isDev, // 是否允许不通过mutations修改store数据
        state:defaultState,
        mutations,
        getters,
        actions,
        // plugins:[
        //     (store)=>{
        //     // 使用一些插件
        //         console.log('my plugin invoked')
        //     }
        // ]
    });

    if(module.hot){
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters'
        ],()=>{
            const newState = require('./state/state').default;
            const newMutations = require('./mutations/mutations').default;
            const newActions = require('./actions/actions').default;
            const newGetters = require('./getters/getters').default;

            store.hotUpdate({
                state:newState,
                mutations:newMutations,
                actions:newActions,
                getters:newGetters,
            })
        })
    }
    return store
}
