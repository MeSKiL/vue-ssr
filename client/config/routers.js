// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        // path: '/app/:id',
        path: '/app',
        // props:true, // 将把id以props传入Todo
        // props:(route)=>({
        //    // id:route.query.b
        //    id:route.params.id
        // }),
        // 如果不用props传，组件里通过this.$route获取信息的话，组件将会无法复用，props则通用性强，解偶
        // components:{ // 栅栏布局
        //     default:Todo,
        //     a:Login
        // },
        // components:{ // 栅栏布局,这种方式，组件内的beforeRouteEnter的next的回调vm拿不到props
        //     default:Todo,
        // },
        // component:Todo,
        component: ()=>import('../views/todo/todo.vue'), // 异步加载，这种语法需要babel-plugin-syntax-dynamic-import
        name: 'app', // 用于路由跳转
        meta: {
            title: 'app',
            description: 'this is app'
        },
        // children: [  // 嵌套路由
        //     {
        //         path: 'test', // 出现在Todo的router-view组件里
        //         component: Login
        //     }
        // ],
        beforeEnter(to, from, next) {
            console.log('app route before enter');
            next();
        }
    },
    {
        path: '/login',
        // components: {
        //     default: Login,
        // }
        component: ()=>import('../views/login/login.vue'), // 异步加载
    }
]
