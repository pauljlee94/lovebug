<template>
  <div>
    <h1>Edit Post</h1>
    <el-card class="postForm">
      <el-row class="row-m">
        <el-input v-model="title" id="blog-title" type="text" placeholder="title" clearable />
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
        <el-button style="width: 100%" type="primary" @click="updateData">Update</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { db } from "../../main";
import { VueEditor } from "vue2-editor";

export default {
  name: "AdminBlogPost",
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
  beforeCreate() {
    const ref = db.collection("blogPosts").doc(this.$route.params.id);
    ref.get().then(post => {
      const data = post.data();
      this.title = data.title;
      this.time = data.time;
      this.content = data.content;
    });
  },
  methods: {
    updateData() {
      const ref = db.collection("blogPosts").doc(this.$route.params.id);
      ref
        .set({
          title: this.title,
          time: this.time,
          content: this.content
        })
        .then(() => this.$router.replace("/admin/blog"));
    }
  },
  components: {
    VueEditor
  }
};
</script>

<style>
#editor {
  height: 300px;
}
</style>
