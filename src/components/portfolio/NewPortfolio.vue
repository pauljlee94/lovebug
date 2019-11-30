<template>
  <div>
    <h1>New Photo</h1>
    <div class="uploadform">
      <el-select
        v-model="category"
        @change="stageImages"
        class="photo-category"
        placeholder="Category"
      >
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
        ref="upload"
        drag
        action
        multiple
        list-type="picture"
        :on-change="stageImages"
        :on-remove="stageImages"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Drop file here or
          <em>click to upload</em>
        </div>
      </el-upload>
      <el-button
        v-bind:disabled="disabled"
        @click="uploadImage"
        class="photouploadbutton"
        type="primary"
      >
        <i v-if="uploading" class="el-icon-loading"></i>
        <span v-if="!uploading">Upload Photo</span>
      </el-button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "NewPortfolio",
  data() {
    return {
      fileList: [],
      disabled: true,
      uploading: false,
      category: "",
      categoryOptions: [
        {
          value: "weddings",
          label: "Weddings & Elopements"
        },
        {
          value: "engagements",
          label: "Engagements & Couples"
        },
        {
          value: "newborns",
          label: "Newborns & Children"
        }
      ]
    };
  },
  methods: {
    stageImages() {
      if (this.$refs.upload.uploadFiles.length !== 0 && this.category !== "") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    uploadImage() {
      let stagedImages = this.$refs.upload.uploadFiles;
      stagedImages.forEach(image => {
        this.fileList.push(image.raw);
      });

      let uploadedImages = 0;
      this.uploading = true;
      this.fileList.forEach((file, index, array) => {
        const storageRef = firebase
          .storage()
          .ref(`${this.category}/${file.name}`);
        storageRef.put(file).then(() => {
          uploadedImages++;
          if (uploadedImages === array.length) {
            this.uploading = false;
            this.fileList = [];
            this.$refs.upload.uploadFiles = [];
          }
        });
      });
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
