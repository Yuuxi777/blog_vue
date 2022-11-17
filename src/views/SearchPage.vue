<template>
  <div>
    <NavigatorVue></NavigatorVue>
    <div id="blogBox">
      <div id="result">搜索到以下结果：</div>
      <SearchResult></SearchResult>
    </div>
    <ToTop></ToTop>
  </div>
</template>

<script>
import NavigatorVue from "@/components/NavigatorVue.vue";
import ToTop from "@/components/ToTop.vue";
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "SearchPage",
  components: { NavigatorVue, ToTop, SearchResult },
  data() {
    return {
      results: [],
      keyword: "",
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
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
  top: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 70px;
  padding-bottom: 50px;
}

#result {
  font-weight: bolder;
  position: relative;
  font-size: 30px;
  color: rgb(59, 59, 59);
  left: 10%;
  top: 30px;
}
</style>