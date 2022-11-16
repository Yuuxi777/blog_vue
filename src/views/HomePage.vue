<template>
  <div id="HomePage">
    <SloganVue></SloganVue>
    <div id="blogBox">
      <p id="recentPost">最近发布</p>
      <RecentBlog></RecentBlog>
    </div>
    <ToTop></ToTop>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import SloganVue from "@/components/SloganVue.vue";
import CopyRight from "../components/CopyRight.vue";
import ToTop from "@/components/ToTop.vue";
import RecentBlog from "@/components/RecentBlog.vue";
export default {
  name: "HomePage",
  data() {
    return {
      allBlogs: [],
    };
  },
  components: {
    SloganVue,
    CopyRight,
    ToTop,
    RecentBlog,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#blogBox {
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 60%;
  left: 20%;
  height: auto;
  top: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 70px;
  padding-bottom: 50px;
}

#recentPost {
  font-weight: bolder;
  position: relative;
  font-size: 40px;
  color: rgb(59, 59, 59);
  left: 10%;
  top: 30px;
}

</style>