<template>
  <div>
    <h1>New Post</h1>
    <el-card class="postForm">
      <el-row class="row-m">
        <el-input v-model="title" id="blog-title" type="text" placeholder="title" clearable />
      </el-row>
      <el-row class="row-m">
        <el-upload
          class="blog-upload"
          ref="upload"
          list-type="picture"
          :on-change="stageImages"
          :on-remove="stageImages"
          :auto-upload="false"
        >
          <el-button type="primary">Click to upload picture</el-button>
        </el-upload>
      </el-row>
      <el-row class="row-m">
        <vue-editor
          :editorToolbar="customToolbar"
          placeholder="content"
          id="editor"
          v-model="content"
        />
      </el-row>
      <el-row class="row-m">
        <el-button style="width: 100%" type="primary" @click="savePost">Add</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { db } from "../../main";
import { VueEditor } from "vue2-editor";

export default {
  name: "NewBlogPost",
  data() {
    return {
      title: "",
      time: "",
      content: "",
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "link"]
      ]
    };
  },
  methods: {
    savePost() {
      db.collection("blogPosts")
        .add({
          title: this.title,
          content: this.content,
          time: new Date().getTime()
        })
        .then(() => this.$router.replace("/admin/blog"))
        .catch(error => {
          //console.error(`Error adding document: ${error}`)
          return error;
        });
    }
  },
  components: { VueEditor }
};
</script>

<style>
.blog-upload .el-upload {
  width: 100%;
}
.blog-upload .el-upload .el-button {
  width: 100%;
}
</style>
