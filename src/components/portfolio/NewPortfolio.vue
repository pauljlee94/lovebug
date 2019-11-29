<template>
  <div>
    <h1>New Photo</h1>
    <div class="uploadform">
      <el-select class="photo-category" placeholder="Category">
        <el-option>Wedding</el-option>
        <el-option>blah</el-option>
      </el-select>
      <el-upload
        class="admin-upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Drop file here or
          <em>click to upload</em>
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPortfolio",
  data() {
    return {
      fileList: []
    };
  },
  methods: {},
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
</style>
