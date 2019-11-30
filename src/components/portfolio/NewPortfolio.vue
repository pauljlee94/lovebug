<template>
  <div>
    <h1>New Photo</h1>
    <div class="uploadform">
      <el-select v-model="category" class="photo-category" placeholder="Category">
        <el-option
          v-for="option in categoryOptions"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :auto-upload="false"
        ></el-option>
      </el-select>
      <el-upload
        class="admin-upload"
        drag
        action
        multiåple
        list-type="picture"
        :http-request="stageImages"
        :file-list="fileList"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Drop file here or
          <em>click to upload</em>
        </div>
      </el-upload>
      <el-button @click="test" class="photouploadbutton" type="primary">Upload Photo</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPortfolio",
  data() {
    return {
      fileList: [],
      category: "",
      categoryOptions: [
        {
          value: "Weddings & Elopements",
          label: "Weddings & Elopements"
        },
        {
          value: "Engagements & Couples",
          label: "Engagements & Couples"
        },
        {
          value: "Newborns & Children",
          label: "Newborns & Children"
        }
      ]
    };
  },
  methods: {
    stageImages() {
      console.log("test");
    },
    test() {
      console.log("upload");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  components: {}
};
</script>

<style>
.uploadform {
  text-align: center;
}
.admin-upload .el-upload {
  width: 100%;
}
.el-upload-dragger {
  margin: 0;
  width: 100%;
}
.photo-category {
  width: 100%;
  margin-bottom: 20px;
}
.uploadform .el-button {
  margin-top: 20px;
  width: 100%;
}
</style>
