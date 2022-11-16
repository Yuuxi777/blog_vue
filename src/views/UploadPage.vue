<template>
  <div>
    <input type="text" id="blogTitle" placeholder="博客标题" v-model="title" />
    <el-select
      v-model="category"
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签"
    >
      <el-option
        v-for="c in categories"
        :key="c.id"
        :label="c.name"
        :value="c.name"
      >
      </el-option>
    </el-select>
    <div class="mavonEditor">
      <mavon-editor :toolbars="markdownOption" v-model="content" />
    </div>
    <div id="upload" @click="uploadBlog">上传博客</div>
  </div>
</template>

<script>
export default {
  name: "UploadPage",
  components: {},
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
      },
      content: "",
      title: "",
      category: "",
      res: [],
      categories: [],
    };
  },
  methods: {
    async uploadBlog() {
      if (this.title == "" || this.content == "" || this.category == "") {
        alert("还有内容是空的捏");
      } else {
        await this.axios({
          method: "POST",
          url: "/uploadBlog",
          headers: { "Content-Type": "application/json" },
          data: {
            title: "## " + this.title,
            content: this.content,
            category: this.category,
          },
        }).then(
          (response) => {
            this.res = response.data;
            console.log(this.res);
          },
          (err) => {
            console.log(err.response);
          }
        );
        if (this.res.status == 0) {
          alert("上传成功！");
          this.$router.go(0);
        }
      }
    },
    getCategory() {
      this.axios({
        method: "GET",
        url: "/getAllCategories",
      }).then(
        (response) => {
          this.categories = response.data.data;
        },
        (err) => {
          console.log(err.response);
        }
      );
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style scoped>
.mavonEditor {
  width: 80%;
  height: 100%;
  position: relative;
  left: 10%;
  top: 300px;
  z-index: -1;
}

#upload {
  position: absolute;
  right: 12%;
  top: 15%;
  margin-top: 50px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: black;
  background-color: white;
  font-size: 20px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
}

#blogTitle {
  position: absolute;
  top: 20%;
  height: 50px;
  width: 800px;
  left: 10%;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding-left: 5px;
}

.el-select {
  position: relative;
  top: 200px;
  left: 1200px;
}

#upload:hover {
  background-color: rgb(215, 215, 215);
}

p {
  color: red;
  position: absolute;
  top: 300px;
  font-size: 20px;
}
</style>