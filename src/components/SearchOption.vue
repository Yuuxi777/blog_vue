<template>
  <div>
    <div class="searchBox">
      <img id="icon" src="../assets/search.png" alt="" />
      <div id="textInput">
        <input
          type="text"
          id="input"
          placeholder="Seach Blog"
          @keyup.enter="jumpToSearchPage"
          v-model="keyword"
        />
        <div id="clear"></div>
        <div id="go" @click="jumpToSearchPage">Go</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchOption",
  data() {
    return {
      keyword: "",
      results: [],
    };
  },
  methods: {
    jumpToSearchPage() {
      this.$store.commit("saveKeyword",this.keyword);
      this.$router.push({
        name: "jieguo",
      });
    },
  },
  mounted() {
    let box = document.querySelector(".searchBox");
    let icon = document.getElementById("icon");
    let clear = document.getElementById("clear");
    let input = document.getElementById("input");
    icon.addEventListener("click", () => {
      box.classList.toggle("changeWidth");
    });
    clear.addEventListener("click", () => {
      input.value = "";
    });
  },
};
</script>

<style scoped>
.searchBox {
  position: relative;
  left: 10%;
  top: 30px;
  background-color: rgb(240, 240, 240);
  height: 70px;
  width: 70px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  border-radius: 35px;
  overflow: hidden;
  transition: 0.7s;
}

.changeWidth {
  width: 500px;
}

img {
  position: absolute;
  top: -65px;
  left: -65px;
  transform: scale(0.2);
  cursor: pointer;
  user-select: none;
}

#textInput {
  position: absolute;
  left: 90px;
  top: 0;
  height: 70px;
  width: 280px;
}

#input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  background-color: rgb(240, 240, 240);
  overflow: hidden;
}

#clear {
  width: 15px;
  height: 15px;
  position: absolute;
  right: -20%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  /* background-color: blue; */
}

#clear::before {
  content: "";
  width: 2px;
  height: 15px;
  background-color: rgb(100, 100, 100);
  position: absolute;
  transform: rotate(45deg);
}

#clear::after {
  content: "";
  width: 2px;
  height: 15px;
  background-color: rgb(100, 100, 100);
  transform: rotate(315deg);
  position: absolute;
}

#go {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(230, 230, 230);
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40%;
  color: rgb(100, 100, 100);
  cursor: pointer;
  user-select: none;
}
</style>