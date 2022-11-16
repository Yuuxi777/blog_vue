<template>
  <div id="totop">
    <div
      id="topBox"
      style="cursor: pointer"
      @click="backToTop"
      v-if="isTop === 0"
    >
      <img src="../assets/totop.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToTop",
  data() {
    return {
      isTop: 0,
    };
  },
  watch: {
    isTop: function () {
      this.isTop = window.pageYOffset;
      console.log(this.isTop);
    },
  },
  methods: {
    backToTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
#topBox {
  position: fixed;
  left: 85%;
  bottom: 70px;
  background-color: rgb(245, 245, 245);
  height: 70px;
  width: 70px;
  border-radius: 35px;
}

img {
    position: relative;
    left: 5px;
    top: 5px;
}
</style>