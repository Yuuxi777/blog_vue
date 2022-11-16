<template>
  <div>
    <NavigatorVue></NavigatorVue>
    <div id="uploadBlog" @click="jumpToBlogs">博客</div>
    <div id="uploadPhotos" @click="jumpToPhotos">照片</div>
  </div>
</template>

<script>
import NavigatorVue from "@/components/NavigatorVue.vue";
export default {
  components: { NavigatorVue },
  name: "SelectOption",
  data() {
    return {};
  },
  methods: {
    jumpToPhotos() {
      this.$router.push({
        name: "shangchuanzhaopian",
      });
    },
    jumpToBlogs() {
      this.$router.push({
        name: "shangchuan",
      });
    },
  },
};
</script>

<style>
#uploadBlog {
  position: absolute;
  width: 10%;
  left: 35%;
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  background-color: white;
  color: black;
  top: 45%;
  text-align: center;
  border-radius: 20px;
  user-select: none;
}

#uploadPhotos {
  position: absolute;
  width: 10%;
  left: 55%;
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  background-color: white;
  color: black;
  top: 45%;
  text-align: center;
  border-radius: 20px;
  user-select: none;
}

#uploadBlog:hover,
#uploadPhotos:hover {
  background-color: rgba(220, 220, 220, 1);
}
</style>