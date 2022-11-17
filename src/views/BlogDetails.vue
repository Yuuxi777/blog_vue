<template>
  <div id="blogBox">
    <div id="blog">
      <div id="title" class="markdown-body" v-html="convert(blog.title)"></div>
      <div
        id="content"
        class="markdown-body"
        v-html="convert(blog.content)"
      ></div>
    </div>
    <ToTop></ToTop>
  </div>
</template>

<script>
import { marked } from "marked";
import ToTop from "@/components/ToTop.vue";
import "github-markdown-css";

export default {
  name: "BlogDetails",
  data() {
    return {
      id: -1,
      blog: [],
    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
    });
    if (this.blog.length == 0) {
      this.getBlogById(this.id);
    }
  },
  created() {
    this.blog = this.$store.state.blog;
    this.id = this.$route.query.param;
    console.log(this.id);
  },
  methods: {
    convert(str) {
      return marked.parse(str);
    },
    async getBlogById(id) {
      await this.axios({
        method: "GET",
        url: "/getBlogById",
        params: {
          id: id,
        },
      }).then(
        (response) => {
          this.blog = response.data.data;
          console.log(response.data);
        },
        (err) => {
          console.log(err.response);
        }
      );
    },
  },
  components: { ToTop },
};
</script>

<style scoped>
#blogBox {
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 60%;
  left: 20%;
  height: auto;
  top: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 70px;
  padding-bottom: 80px;
}

#title {
  position: relative;
  left: 5%;
  width: 90%;
  top: 40px;
  background-color: rgb(245, 245, 245);
  font-size: 25px;
}

#category {
  position: relative;
  left: 5%;
  width: 90%;
  margin-top: 40px;
  background-color: rgb(245, 245, 245);
  font-size: 25px;
}

#content {
  position: relative;
  left: 5%;
  width: 90%;
  margin-top: 80px;
  background-color: rgb(245, 245, 245);
  font-size: 25px;
}
</style>