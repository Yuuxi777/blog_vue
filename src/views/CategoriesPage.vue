<template>
  <div id="CategoriesPage">
    <SloganVue></SloganVue>
    <div id="blogBox">
      <CategoriesInfo></CategoriesInfo>
    </div>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'
import SloganVue from '@/components/SloganVue.vue';
import CategoriesInfo from '@/components/CategoriesInfo.vue';

export default {
    name: "CategoriesPage",
    data() {
        return {};
    },
    components: { CopyRight, SloganVue, CategoriesInfo }
}
</script>

<style scoped>
#blogBox {
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 60%;
  left: 20%;
  height: auto;
  top: -20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 70px;
  padding-bottom: 50px;
}
</style>