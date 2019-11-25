<template>
  <div class="blogCard">
    <h2 class="postTitle">{{ title }}</h2>
    <p class="postDate">{{ time }}</p>
    <p class="postContent">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["title", "time", "content"]
}
</script>

<style></style>
