<template>
  <div>
    <div id="box">
      <el-upload
        ref="upload"
        action=""
        multiple
        :auto-upload="false"
        :http-request="handleupload"
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <div id="submit" @click="uploadPhotos">点击上传</div>
  </div>
</template>

<script>
export default {
  name: "UploadPhoto",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      files: [],
    };
  },
  methods: {
    uploadPhotos() {
      let formdata = new FormData();
      this.$refs.upload.submit();
      this.files.forEach((item) => {
        formdata.append("files", item); //将每一个文件图片都加进formdata
      });
      formdata.append("score", 4);
      this.axios.post("/uploadPhotos", formdata).then((res) => {
        alert("上传成功！");
        console.log(res);
      });
    },
    handleupload(param) {
      this.files.push(param.file); // 一般情况下是在这里创建FormData对象，但我们需要上传多个文件，为避免发送多次请求，因此在这里只进行文件的获取，param可以拿到文件上传的所有信息
    },
  },
};
</script>

<style scoped>
#box {
  position: relative;
  top: 200px;
  left: 30px;
}

#submit {
  position: absolute;
  width: 10%;
  left: 80%;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  background-color: white;
  color: black;
  top: 90%;
  text-align: center;
  border-radius: 20px;
  user-select: none;
}

#submit:hover {
  background-color: rgba(220, 220, 220, 1);
}
</style>