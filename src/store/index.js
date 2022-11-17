import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog_count: 0,
    start: 0,
    end: 0,
    curpage: 1,
    blog: [],
    isLogin: -1,
    keyword: "",
  },

  //getter
  getters: {
  },

  //setter
  mutations: {
    saveStart(state, start) {
      state.start = start;
    },
    saveEnd(state, end) {
      state.end = end;
    },
    saveBlog(state, blog) {
      state.blog = blog;
    },
    saveCurPage(state, curpage) {
      state.curpage = curpage;
    },
    saveIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    saveKeyword(state, keyword) {
      state.keyword = keyword;
    },
  },
  actions: {
  },
  modules: {
  }
})
