<template>
  <div>
    <h1>用户登录</h1>
    <div>
      <p>
        <input type="text" placeholder="请输入用户名" v-model="username">
      </p>
      <p>
        <input type="password" placeholder="请输入密码"  v-model="password">
      </p>
      <input type="button" value="登录" @click="doLogin">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods:{
      doLogin(){
        var that = this
        this.$axios.request({
          url:'http://127.0.0.1:8000/api/v1/auth/',
          method:'POST',
          data:{
            user:this.username,
            pwd:this.password
          },
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function (arg) {
          if (arg.data.code === 1000){
            that.$store.commit('saveToken',{token:arg.data.token,username:that.username})

          }else{
            alert(arg.data.error)
          }
        }).catch(function (arg) {
          console.log('发生错误')
        })

      }
    }
  }
</script>

<style scoped>

</style>
