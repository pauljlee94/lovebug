<template>
  <div>
    <h1>New Post</h1>
    <label for="blog-title">Title</label>
    <input v-model="title" id="blog-title" type="text" />
    <label for="blog-content">Content</label>
    <vue-editor id="editor" v-model="content" />
    <button @click="savePost">Add</button>
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
      content: ""
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
          console.error(`Error adding document: ${error}`)
        })
    }
  },
  components: { VueEditor }
}
</script>

<style></style>
