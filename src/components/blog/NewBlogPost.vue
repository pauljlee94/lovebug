<template>
  <div>
    <h1>New Post</h1>
    <el-card class="postForm">
      <el-row class="row-m">
        <el-input
          v-model="title"
          id="blog-title"
          type="text"
          placeholder="title"
          clearable
        />
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
        <el-button @click="savePost">Add</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { db } from "../../main"
import { VueEditor } from "vue2-editor"

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
        ["image", "code-block"]
      ]
    }
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
          return error
        })
    }
  },
  components: { VueEditor }
}
</script>

<style></style>
