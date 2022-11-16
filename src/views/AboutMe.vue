<template>
  <div id="AboutMe">
    <div id="myInfoBox">
      <img id="portrait" src="../assets/portrait.jpg" alt="" />
      <img id="code1" src="../assets/code1.jpg" alt="" />
      <img id="code2" src="../assets/code2.jpg" alt="" />
      <p id="text1">花卡茶的碎碎念</p>
      <p id="text2">追忆之路 后悔之路 忘却之路</p>
      <div id="text3">
        <p id="welcome">欢迎来到这个博客！</p>
        <p id="self">关于我：</p>
        <p id="self1">
          一个平平无奇的垃圾代码生成器，现就读于华东师范大学软件工程专业
        </p>
        <p id="self2">一个拥有星星的凡夫俗子,星星在复旦大学念中文XD</p>
        <p id="self3">
          一个小卡的忠实粉丝，现在正在努力成为像他一样“重剑无锋，大巧不工”的人
        </p>
        <p id="bug">
          如果您在访问过程中有什么bug或者建议<br /><br />请通过左边的联系方式告诉我
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AboutMe",
    data() {
        return {};
    },
};
</script>

<style scoped>
#myInfoBox {
  position: absolute;
  background-color: rgb(245, 245, 245);
  width: 80%;
  left: 10%;
  height: 60%;
  top: 20%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 70px;
  padding-bottom: 50px;
}

#copyRight {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: rgb(9, 7, 35);
  line-height: 60px;
  text-align: center;
  color: rgb(200, 200, 200);
  user-select: none;
}

#portrait {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

#text1,
#text2 {
  position: absolute;
  font-size: 25px;
  user-select: none;
}

#text1 {
  left: 11%;
  top: 45%;
}

#text2 {
  left: 6.5%;
  top: 52%;
}

#text3 {
  position: absolute;
  top: 10%;
  left: 35%;
}

#welcome {
  font-size: 40px;
  user-select: none;
}

#self,
#self1,
#self2,
#self3 {
  font-size: 25px;
  user-select: none;
}

#self {
  margin-top: 60px;
}
#self1,
#self2,
#self3 {
  margin-top: 20px;
}

#bug {
  margin-top: 75px;
  font-size: 30px;
  user-select: none;
}

#code1,
#code2 {
  position: absolute;
  width: 160px;
  height: 160px;
}

#code1 {
  top: 70%;
  left: 19%;
}

#code2 {
  top: 70%;
  left: 4%;
}
</style>