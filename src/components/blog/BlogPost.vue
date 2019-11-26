<template>
  <div>
    <h1>New Post</h1>
    <label for="blog-title">Title</label>
    <input v-model="title" id="blog-title" type="text" />
    <label for="blog-content">Content</label>
    <vue-editor id="editor" v-model="content" />
    <button @click="updateData()">Update</button>
  </div>
</template>

<script>
import { db } from "../../main"
import { VueEditor } from "vue2-editor"

export default {
  name: "BlogPost",
  data() {
    return {
      title: "",
      time: "",
      content: ""
    }
  },
  beforeCreate() {
    const ref = db.collection("blogPosts").doc(this.$route.params.id)
    ref.get().then(post => {
      const data = post.data()
      this.title = data.title
      this.time = data.time
      this.content = data.content
    })
  },
  methods: {
    updateData() {
      const ref = db.collection("blogPosts").doc(this.$route.params.id)
      ref
        .set({
          title: this.title,
          time: this.time,
          content: this.content
        })
        .then(() => this.$router.replace("/admin/blog"))
    }
  },
  components: {
    VueEditor
  }
}
</script>

<style></style>
