<template>
  <layout-default>
    <div id="blog">
      <p>Blog</p>
      <BlogPost />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue"
import BlogPost from "../components/blog/BlogPost"

export default {
  name: "Blog",
  props: {
    //data here
  },
  components: { LayoutDefault, BlogPost }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
