<template>
  <div id="sloganBg">
    <div id="sloganBox">Board Man Gets Paid.</div>
  </div>
</template>

<script>
export default {
  name: "SloganVue",
};
</script>

<style scoped>
#sloganBg {
  position: relative;
  left: 0%;
  top: 80px;
  background-image: url(../assets/kawhi.jpg);
  width: 100%;
  height: 600px;
}
 
#sloganBox {
  background-color: rgba(245, 245, 245, 0.7);
  font-size: 60px;
  position: relative;
  width: 50%;
  height: 100px;
  left: 25%;
  top: 200px;
  text-align: center;
  line-height: 100px;
  border-radius: 40px;
}
</style>