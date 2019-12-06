<template>
  <div id="blog">
    <h1>Blog</h1>
    <BlogList />
  </div>
</template>

<script>
import BlogList from "../../components/blog/BlogList";

export default {
  name: "Blog",
  props: {
    //data here
  },
  components: { BlogList }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
