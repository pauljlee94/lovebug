<template>
  <div id="blog">
    <masonry id="blogWall" :cols="{ default: 3, 1600: 2, 900: 1 }" :gutter="10">
      <div
        class="post"
        v-for="blogpost in blogPosts"
        :key="blogpost.title"
        :style="{backgroundColor: blogpost.color}"
      >
        <router-link :to="`/blog/${blogpost.id}`">
          <!-- {{changeColor()}} -->
          <h2>{{blogpost.title}}</h2>
          <p>{{blogpost.time}}</p>
        </router-link>
      </div>
    </masonry>
  </div>
</template>

<script>
import { db } from "../../main";

export default {
  name: "PublicBlog",
  props: {
    //data here
  },
  data() {
    return {
      blogPosts: []
    };
  },
  computed: {},
  methods: {
    formatDate(rawDate) {
      const dateObj = new Date(rawDate);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const year = dateObj.getFullYear();
      const month = dateObj.getMonth();
      const date = dateObj.getDate();
      return monthNames[month] + " " + date + ", " + year;
    }
  },
  created() {
    const postsRef = db.collection("blogPosts").orderBy("time");
    postsRef.get().then(blogPosts => {
      blogPosts.forEach(blogPost => {
        const data = blogPost.data();
        data.color = `hsla(${Math.floor(Math.random() * 360)},${Math.floor(
          Math.random() * 75
        )}%,95%,0.7)`;
        data.id = blogPost.id;
        data.time = this.formatDate(data.time);
        this.blogPosts.unshift(data);
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px !important;
  margin-bottom: 10px;
  /* background-color: hsl(503, 100%, 93%); */
}
.post a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
}
.post h2 {
  font-family: "Solway", serif;
  font-weight: 400;
  font-size: 20px;
  margin: 5px;
}
.post p {
  font-family: "Solway", serif;
  font-weight: 400;
  font-size: 14px;
  margin: 5px;
  color: rgb(61, 61, 61);
}
</style>