<template>
  <div class="blogPost">
    <BlogCard
      v-for="(blogPost, index) in blogPosts"
      v-bind:key="index"
      v-bind:title="blogPost.title"
      v-bind:time="blogPost.time"
      v-bind:content="blogPost.content"
    />
  </div>
</template>

<script>
//import firebase from "firebase"
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
        this.blogPosts.push(blogPost.data());
      });
    });
  },
  components: { BlogCard }
};
</script>

<style></style>
