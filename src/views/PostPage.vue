<template>
  <div id="PostPage">
    <SloganVue></SloganVue>
    <div id="blogBox">
      <div id="total" v-if="curPage == 1">
        到今天，花卡茶一共发布了 {{ blog_count }} 篇博客：
      </div>
      <BlogInfo></BlogInfo>
      <ul id="pageSwitch">
        <li v-if="curPage > 1" @click="curPage--, pageClick()">
          <img id="prePage" src="../assets/prepage.png" alt="" />
        </li>
        <li v-if="curPage == 1">
          <img id="prePage_ban" src="../assets/prepage.png" alt="" />
        </li>

        <li
          id="pages"
          v-for="i in indexes"
          :key="i"
          @click="(isActive = i), page(i)"
          :class="{ activePage: isActive == i }"
        >
          {{ i }}
        </li>

        <li v-if="curPage < pageNum" @click="curPage++, pageClick()">
          <img id="nextPage" src="../assets/nextpage.png" alt="" />
        </li>
        <li v-if="curPage == pageNum">
          <img id="nextPage_ban" src="../assets/nextpage.png" alt="" />
        </li>
      </ul>
    </div>
    <ToTop></ToTop>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import SloganVue from "@/components/SloganVue.vue";
import CopyRight from "@/components/CopyRight.vue";
import BlogInfo from "@/components/BlogInfo.vue";
import ToTop from "@/components/ToTop.vue";
export default {
  name: "PostPage",
  data() {
    return {
      pageSize: 5, //每页显示数
      pageNum: 0, //总页数
      curPage: 1, //当前页数
      pages: [],
      blog_count: "",
      blogs: [],
    };
  },
  methods: {
    page(i) {
      if (i != this.curPage) {
        this.curPage = i;
        document.documentElement.scrollTop = 0;
      }
      console.log("这是第" + this.curPage + "页");
    },
    pageClick() {
      this.isActive = this.curPage;
      document.documentElement.scrollTop = 0;
    },
    getAllBlogs() {
      this.axios({
        method: "GET",
        url: "/getBlogCount",
      }).then(
        (response) => {
          this.blog_count = response.data.data;
          this.pageNum = Math.ceil(this.blog_count / this.pageSize) || 1;
        },
        (err) => {
          console.log(err.response);
        }
      );
    },
  },
  computed: {
    indexes: function () {
      var left = 1;
      var right = this.pageNum;
      var arr = [];
      if (this.pageNum >= 5) {
        //这里最大范围从3到6，如果到达7，那么下边加2变成9，已经超过最大的范围值
        if (this.curPage > 3 && this.curPage < this.pageNum - 1) {
          //以4为参考基准，左面加2右边加2
          left = this.curPage - 2;
          right = this.curPage + 2;
        } else {
          if (this.curPage <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.pageNum;
            left = this.pageNum - 4;
          }
        }
      }
      while (left <= right) {
        arr.push(left);
        left++;
      }
      // console.log(arr);
      return arr;
    },
  },
  components: { SloganVue, CopyRight, BlogInfo, ToTop },
  async mounted() {
    await this.getAllBlogs();
    this.isActive = 1;
    this.curPage = 1;
  },
  watch: {
    curPage: function () {
      this.$store.commit("saveCurPage", this.curPage);
    },
  },
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
  padding-bottom: 0px;
}

#total {
  font-weight: bolder;
  position: relative;
  font-size: 30px;
  color: rgb(59, 59, 59);
  left: 10%;
  top: 30px;
}

ul li {
  display: inline-block;
  width: auto;
  margin-top: 60px;
  color: rgb(45, 45, 45);
  font-size: 20px;
  text-align: center;
  user-select: none;
  padding-bottom: 20px;
  padding-left: 5px;
  cursor: pointer;
}

ul {
  text-align: center;
}

ul li:hover,
#pages :active {
  text-decoration: underline;
}

#prePage,
#prePage_ban,
#nextPage,
#nextPage_ban {
  position: relative;
  top: 8px;
  width: 30px;
  height: 30px;
}

#prePage_ban,
#nextPage_ban {
  cursor: not-allowed;
}

#pages {
  width: 40px;
}
</style>