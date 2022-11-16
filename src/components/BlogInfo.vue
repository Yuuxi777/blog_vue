<template>
  <div>
    <div
      id="blogInfo"
      v-for="blog in blogs.slice(start, end)"
      :key="blog.id"
      @click="getBlogById(blog.id)"
    >
      <p id="bTitle">{{ blog.title }}</p>
      <p id="bContent">
        {{ blog.content }}
      </p>
      <div id="timeBox">
        <img id="timeImg" src="../assets/bcreatetime.png" alt="" />
        <p id="bCreateTime">{{ blog.createTime }}</p>
      </div>
      <div id="categoriesBox">
        <img id="categoriesImg" src="../assets/bcategories.png" alt="" />
        <p id="bCategories">{{ blog.category }}</p>
      </div>
      <div id="authorBox">
        <img id="authorImg" src="../assets/bauthor.png" alt="" />
        <p id="bAuthor">花卡茶</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogInfo",
  data() {
    return {
      blogs: [],
      isComplete: false,
      pageSize: 5,
    };
  },

  methods: {
    getBlogs() {
      this.axios({
        method: "GET",
        url: "/getAllBlogs",
      }).then(
        (response) => {
          this.blogs = response.data.data;
        },
        (err) => {
          console.log(err.response);
        }
      );
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
      this.$store.commit("saveBlog", this.blog);
      this.$router.push({
        name: "boke",
        query: {
          param: id,
        },
      });
    },
  },
  mounted() {
    this.getBlogs();
  },
  computed: {
    start: function () {
      return (this.$store.state.curpage - 1) * this.pageSize;
    },
    end: function () {
      return this.$store.state.curpage * this.pageSize;
    },
  },
};
</script>

<style scoped>
#blogInfo {
  position: relative;
  top: 20px;
  margin-top: 80px;
  width: 80%;
  left: 10%;
  height: 170px;
  padding-top: 2px;
  padding-bottom: 5px;
  border-radius: 10px;
}

#blogInfo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 20px 0 rgb(141, 141, 141), 0 8px 10px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 10px;
}

#blogInfo:hover::before {
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 1;
  transform: scale(1, 1.05);
}

p {
  position: relative;
}

#bTitle {
  margin-top: 2%;
  left: 20px;
  font-size: 25px;
  color: rgb(37, 37, 37);
  font-weight: bolder;
  user-select: none;
}

#bContent {
  margin-top: 2%;
  left: 20px;
  font-size: 17px;
  width: 90%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgb(141, 141, 141);
  user-select: none;
}

#bCreateTime {
  position: absolute;
  bottom: 5px;
  left: 50px;
  color: rgb(141, 141, 141);
  user-select: none;
}

#bCategories {
  position: absolute;
  bottom: 5px;
  left: 210px;
  color: rgb(141, 141, 141);
  user-select: none;
}

#bAuthor {
  position: absolute;
  bottom: 5px;
  right: 25px;
  color: rgb(141, 141, 141);
  user-select: none;
}

img {
  position: absolute;
  transform: scale(0.5);
}

#timeImg {
  bottom: -5px;
  left: 10px;
}

#categoriesImg {
  bottom: -5px;
  left: 170px;
}

#authorImg {
  bottom: -5px;
  right: 70px;
}
</style>