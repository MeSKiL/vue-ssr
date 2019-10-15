import Router from 'vue-router'
import routes from './routers'

// const router = new Router({
//     routes
// });

export default ()=>{ // return一个function 每次都是新router，由于服务的渲染只有一个router的话会内存溢出
    return new Router({
        routes,
        mode:'history',
        // base:'/base/',
        linkActiveClass:'active-link', // 与路径部分匹配，会显示
        linkExactActiveClass:'exact-active-link', // 与路径完全匹配会显示
        scrollBehavior(to,from,savedPosition){ // 返回保存过的位置
            if(savedPosition){
                return savedPosition
            }else{
                return {x:20,y:20}
            }
        },
        // parseQuery(query){
        //
        // },
        // stringifyQuery(obj){
        //
        // },
        // 转换url
        fallback:true, // 浏览器不支持history时，自动用hash模式

    });
}
