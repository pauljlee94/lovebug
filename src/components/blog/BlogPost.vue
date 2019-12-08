<template>
  <div id="blogPost_container">
    <div id="blogPost">
      <h1>{{this.title}}</h1>
      <p>{{this.time}}</p>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { db } from "../../main";

export default {
  name: "BlogPost",
  data() {
    return {
      title: "",
      time: "",
      content: ""
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
  }
};
</script>

<style>
#blogPost_container {
  display: flex;
  justify-content: center;
}
#blogPost {
  width: 500px;
}
#editor {
  height: 300px;
}
</style>
