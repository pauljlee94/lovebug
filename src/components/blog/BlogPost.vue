<template>
  <div id="blogPost_container">
    <div id="blogPost">
      <h1>{{this.title}}</h1>
      <a :href="url" target="_blank">FACEBOOK</a>
      <p id="blogPost_date">{{this.time}}</p>
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
      content: "",
      url:
        "https://www.facebook.com/sharer/sharer.php?u=" + document.location.href
    };
  },
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
  beforeCreate() {
    const ref = db.collection("blogPosts").doc(this.$route.params.id);
    ref.get().then(post => {
      const data = post.data();
      this.title = data.title;
      this.time = this.formatDate(data.time);
      this.content = data.content;
    });
  }
};
</script>

<style>
#blogPost_container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

#blogPost {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 500px;
}
#blogPost h1 {
  margin-bottom: 0;
}
#blogPost h1,
#blogPost_date {
  align-self: flex-start;
}
#blogPost_date {
  margin-top: 5px;
  color: rgb(100, 100, 100);
}
#editor {
  height: 300px;
}
</style>
