<template>
  <div id="Page">
    <div id="PhotoCard" v-for="photo in photos" :key="photo.id">
      <img :src="URL + photo.url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  data() {
    return {
      URL: "http://124.222.212.180:8081",
      photos: [],
    };
  },
  methods: {
    async getAllPhotos() {
      await this.axios({
        method: "GET",
        url: "/getAllPhotos",
      }).then(
        (response) => {
          this.photos = response.data.data;
        },
        (err) => {
          console.log(err.response);
        }
      );
    },
  },
  created() {
    this.getAllPhotos();
  },
};
</script>

<style scoped>
#Page {
  position: relative;
  top: 100px;
  width: 80%;
  margin: 0 auto;
  columns: 5;
  column-gap: 5px;
}

#PhotoCard {
  position: relative;
  width: 100%;
  overflow: hidden;
}
img {
  width: 100%;
  transition: transform 0.7s;
}
img:hover {
  transform: scale(1.2);
}
</style>