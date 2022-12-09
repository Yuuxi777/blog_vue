<template>
  <div>
    <p class="copyRight">Designed by Yuuxi</p>
    <p id="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2022021808号-1</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
};
</script>

<style scoped>
.copyRight {
  text-align: center;
  color: rgb(200, 200, 200);
  user-select: none;
}

#beian {
  text-align: center;
}

a {
  text-decoration: none;
  color: rgb(200, 200, 200);
  user-select: none;
}

#beian:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>