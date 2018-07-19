import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get("username"),
    token:Cookie.get("token"),
  },
  mutations: {
    // 组件中通过 this.$store.commit(saveToken,参数)  调用
    saveToken: function (state, userToken) {
      state.username = userToken.username;
      state.token = userToken.token;
      Cookie.set("username", userToken.username, "20min")
      Cookie.set("token", userToken.token, "20min")

    },
    clearToken: function (state) {
      state.username = null
      state.token = null
      Cookie.remove('username')
      Cookie.remove('token')

    }
  }
})
