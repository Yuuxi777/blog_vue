<template>
  <div id="app">
    <NavigatorVue></NavigatorVue>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigatorVue from "./components/NavigatorVue.vue";
export default {
  name: "App",
  components: {
    NavigatorVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-color: rgb(9, 7, 35);
}

body::-webkit-scrollbar {
  display: none;
}
</style>
