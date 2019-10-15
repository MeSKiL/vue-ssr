<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>{{counter}}{{fullName}}</p>
        <!--<todo></todo>-->
        <router-link :to="{name:'app'}">app</router-link>
        <!--<router-link to="/app/123">app</router-link>-->
        <router-link to="/login">login</router-link>
        <!--<router-link to="/login/exact">login exact</router-link>-->
        <transition name="fade">
            <router-view />
        </transition>
        <Footer></Footer>
        <!--<router-view name="a" />-->
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    } from 'vuex'
    import Header from './layout/header.vue'
    import Footer from './layout/footer.jsx'
    // import Todo from './views/todo/todo.vue'

    export default {
        components: {
            Header,
            Footer,
            // Todo,
        },
        mounted() {
            // console.log(this.$route)
            let i = 1;
            // dispatch触发action commit触发mutation
            this.updateCountAsync({
                num:5,
                time:2000
            });
            this.updateCount(10)
        },
        computed: {
            ...mapState({
                counter:state => state.count
            }),
            ...mapGetters(['fullName'])
            // fullName() {
            //     return this.$store.getters.fullName
            // }
        },
        methods:{
            ...mapActions(['updateCountAsync']),
            ...mapMutations(['updateCount'])
        }
    }
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
</style>


