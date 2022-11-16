<template>
  <div>
    <div id="categoriesInfo">
      <div id="category" v-for="category in categories" :key="category.id">
        <img
          id="fold"
          src="../assets/fold.png"
          alt=""
          v-if="category.isFold"
          @click="getBlogByCategory(category)"
        />
        <img
          id="display"
          src="../assets/display.png"
          alt=""
          v-if="!category.isFold"
          @click="category.isFold = !category.isFold"
        />
        <p id="cName">{{ category.name }}</p>
        <div id="blogBox" v-if="!category.isFold">
          <div id="blog" v-for="blog in category.blogs" :key="blog.id" @click="getBlogById(blog.id)">
            {{ blog.title }}
          </div>
        </div>
      </div>
    </div>
    <ToTop></ToTop>
  </div>
</template>

<script>
import ToTop from './ToTop.vue';
export default {
    name: "CategoriesInfo",
    data() {
        return {
            categories: [],
        };
    },
    methods: {
        getCategory() {
            this.axios({
                method: "GET",
                url: "/getAllCategories",
            }).then((response) => {
                this.categories = response.data.data;
                console.log(response.data);
            }, (err) => {
                console.log(err.response);
            });
        },
        async getBlogByCategory(category) {
            if (this.categories[category.id - 1].blogs == null) {
                await this.axios({
                    method: "GET",
                    url: "/getBlogByCategory",
                    params: {
                        name: category.name,
                    },
                }).then((response) => {
                    this.categories[category.id - 1].blogs = response.data.data;
                    console.log(this.categories);
                }, (err) => {
                    console.log(err.response);
                });
            }
            console.log(category.isFold);
            category.isFold = !category.isFold;
        },
        async getBlogById(id) {
            await this.axios({
                method: "GET",
                url: "/getBlogById",
                params: {
                    id: id,
                },
            }).then((response) => {
                this.blog = response.data.data;
                console.log(response.data);
            }, (err) => {
                console.log(err.response);
            });
            this.$store.commit("saveBlog", this.blog);
            this.$router.push({
                name: "boke",
                query: {
                    param: id,
                },
            });
        },
    },
    created() {
        this.getCategory();
    },
    components: { ToTop }
};
</script>

<style scoped>
#category {
  position: relative;
  width: 80%;
  left: 10%;
  top: 20px;
  margin-top: 40px;
}

#fold,
#display {
  position: absolute;
  /* transform: scale(0.8); */
  cursor: pointer;
}

#cName {
  font-size: 30px;
  position: relative;
  width: auto;
  left: 5%;
  top: -2px;
  user-select: none;
  /* cursor: pointer; */
}

#blogBox {
  position: relative;
}

#blog {
  font-size: 25px;
  position: relative;
  left: 8%;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  user-select: none;
}

#blog::before {
  content: "";
  position: absolute;
  top: 0;
  left: -3%;
  width: 90%;
  height: 100%;
  box-shadow: 0px 8px 20px 0 rgb(141, 141, 141), 0 8px 10px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 10px;
}

#blog:hover::before {
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 1;
  transform: scale(1, 1.05);
}
</style>