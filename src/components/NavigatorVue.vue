<template>
  <div id="NavigatorVue">
    <router-link to="/login">
      <div id="title">花卡茶的碎碎念</div>
    </router-link>
    <router-link to="/about">
      <div id="about" style="cursor: pointer">
        <img src="../assets/about.png" alt="" />
        About
      </div>
      <router-link to="/photos">
        <div id="photos" style="cursor: pointer">
          <img src="../assets/photos.png" alt="" />
          Photos
        </div>
      </router-link>
      <router-link to="/categories">
        <div id="categories" style="cursor: pointer">
          <img src="../assets/categories.png" alt="" />
          Categories
        </div>
      </router-link>
      <router-link to="/post">
        <div id="post" style="cursor: pointer">
          <img src="../assets/post.png" alt="" />
          Post
        </div>
      </router-link>
      <router-link to="/home">
        <div id="home" style="cursor: pointer">
          <img src="../assets/home.png" alt="" />
          Home
        </div>
      </router-link>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavigatorVue",
  data() {
    return {
      currentPath: "",
    };
  },
  methods: {
    getCurrentPath() {
      this.currentPath = this.$route.path;
    },
  },
  watch: {
    $route: "getCurrentPath",
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#NavigatorVue {
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgb(235, 235, 235);
  top: 0px;
  z-index: 5;
  background-attachment: fixed;
}

#title {
  font-size: 25px;
  color: rgb(59, 59, 59);
  line-height: 80px;
  position: absolute;
  left: 3%;
  user-select: none;
  cursor: default;
}

#home,
#post,
#categories,
#photos,
#about {
  position: relative;
  float: right;
  font-size: 15px;
  line-height: 80px;
  margin-left: 30px;
  right: 3%;
  color: rgba(139, 139, 139, 1);
}

img {
  transform: scale(0.5);
  position: relative;
  top: 15px;
  left: 5px;
}

#home:hover,
#post:hover,
#categories:hover,
#photos:hover,
#about:hover {
  color: black;
}

#home:active,
#post:active,
#categories:active,
#photos:active,
#about:active {
  color: black;
}
</style>