<template>
  <div id="PhotosPage">
    <PhotoCard class="photoCard"></PhotoCard>
  </div>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";
export default {
  name: "PhotosPage",
  data() {
    return {};
  },
  components: { PhotoCard },
};
</script>

<style scoped>
</style>