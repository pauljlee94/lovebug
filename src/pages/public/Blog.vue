<template>
  <layout-default>
    <div id="blog">
      <h1>Blog</h1>

      <BlogList />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../layouts/LayoutDefault.vue";
import BlogList from "../../components/blog/BlogList";

export default {
  name: "Blog",
  props: {
    //data here
  },
  components: { LayoutDefault, BlogList }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
