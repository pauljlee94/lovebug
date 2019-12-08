<template>
  <div class="blogPost">
    <BlogCard
      v-for="(blogPost, index) in blogPosts"
      v-bind:key="index"
      v-bind:id="blogPost.id"
      v-bind:title="blogPost.title"
      v-bind:time="blogPost.time"
      v-bind:content="blogPost.content"
      :deleteBlogPost="deleteBlogPost"
    />
  </div>
</template>

<script>
import { db } from "../../main";
import BlogCard from "./BlogCard";

export default {
  name: "BlogList",
  data() {
    return {
      blogPosts: []
    };
  },
  created() {
    const postsRef = db.collection("blogPosts").orderBy("time");
    postsRef.get().then(blogPosts => {
      blogPosts.forEach(blogPost => {
        const data = blogPost.data();
        data.id = blogPost.id;
        this.blogPosts.unshift(data);
      });
    });
  },
  methods: {
    deleteBlogPost(id) {
      const index = this.blogPosts.map(post => post.id).indexOf(id);
      this.blogPosts.splice(index, 1);
      db.collection("blogPosts")
        .doc(id)
        .delete()
        .then(() => {
          //console.log(id, " successfully delted");
        })
        .catch(error => {
          //console.error("Error removing document:", error);
          return error;
        });
    }
  },
  components: { BlogCard }
};
</script>

<style></style>
