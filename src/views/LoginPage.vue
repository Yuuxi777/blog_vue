<template>
  <div>
    <NavigatorVue></NavigatorVue>
    <div id="loginBox">
      <form action="">
        <input
          type="text"
          placeholder="账号"
          v-model="account"
          autocomplete="off"
        />
        <input
          type="password"
          placeholder="密码"
          v-model="password"
          autocomplete="off"
          @keyup.enter="login"
        />
      </form>

      <div id="button" @click="login">登 录</div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import NavigatorVue from "@/components/NavigatorVue.vue";
export default {
  name: "LoginPage",
  components: { NavigatorVue },
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.axios({
        method: "POST",
        url: "/login",
        headers: { "Content-Type": "application/json" },
        data: {
          account: this.account,
          password: md5(this.password),
        },
      }).then(
        (response) => {
          if (response.data.status == -1) {
            alert("用户名或密码错误");
          } else {
            console.log(response.data);
            window.sessionStorage.setItem("token", response.data.data);
            this.$router.push({ name: "xuanze" });
          }
        },
        (err) => {
          console.log(err.response);
        }
      );
    },
  },
};
</script>

<style scoped>
#loginBox {
  position: absolute;
  left: 40%;
  top: 30%;
  width: 20%;
  height: 50%;
  margin: auto;
  background-color: rgba(235, 235, 235, 0.8);
  border-radius: 20px;
}

input {
  position: relative;
  background-color: white;
  color: black;
  width: 300px;
  left: 33px;
  height: 50px;
  border: none;
  outline: none;
  margin-top: 50px;
  top: 20px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
}

#button {
  position: relative;
  width: 220px;
  left: 83px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  background-color: white;
  color: black;
  top: 100px;
  text-align: center;
  border-radius: 20px;
  user-select: none;
}

#button:hover {
  background-color: rgba(220, 220, 220, 1);
}
</style>