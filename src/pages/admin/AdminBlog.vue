<template>
  <div>
    <h1>Manage Blog</h1>
    <router-link to="/admin/blog/new">
      <el-button style="width: 100%">New Blog Post</el-button>
    </router-link>
    <BlogList />
  </div>
</template>

<script>
import BlogList from "../../components/blog/BlogList";

export default {
  name: "AdminBlog",
  components: { BlogList }
};
</script>

<style></style>
