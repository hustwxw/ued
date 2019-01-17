// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

// 以下测试代码
// console.log(this.$store.getters.logined)

// // this.$store.commit("setLogined",{a:1});
// console.log(new Date().valueOf())
// this.$store.dispatch('setLogined').then(function(data){
//  console.log(new Date().valueOf())
// })

// console.log(this.$store.getters.logined)

const store = new Vuex.Store({
    state: {
        isLogin: false,
        username: '',
    },
    getters: {
        // 判断是否登录
        logined: state => {
            return state.isLogin;
        },
        // 登录名
        username: state => {
            return state.username;
        }
    },
    mutations: {
        setLogined(state, preload) {
            state.isLogin = true;
            state.username = preload.username;
        }
    },
    actions: {
        setLogined(context,preload) {
            context.commit("setLogined",preload);
        }
    }
})

export default store;