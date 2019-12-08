<template>
  <div id="blogPost_container">
    <div id="blogPost">
      <h1>{{this.title}}</h1>
      <p id="blogPost_date">{{this.time}}</p>
      <div id="blogPost_share">
        <a :href="facebookURL" target="_blank">
          <img alt="facebook" src="../../assets/icons/facebook.svg" />
          <a :href="twitterURL" target="_blank">
            <img alt="twitter" src="../../assets/icons/twitter.svg" />
          </a>
        </a>
      </div>
      <div id="blogPost_content" v-html="content"></div>
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
      facebookURL:
        "https://www.facebook.com/sharer/sharer.php?u=" +
        document.location.href,
      twitterURL:
        "https://twitter.com/intent/tweet?url=" + document.location.href
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
  width: 700px;
}
#blogPost h1 {
  margin-bottom: 0;
}
#blogPost h1,
#blogPost_date {
  font-family: "Solway", serif;
  align-self: flex-start;
}
#blogPost_date {
  margin-top: 5px;
  color: rgb(100, 100, 100);
}
#editor {
  height: 300px;
}
#blogPost_share {
  display: flex;
  width: 100px;
  align-self: flex-start;
  margin-bottom: 20px;
}
#blogPost_share img {
  width: 25px;
  margin-right: 10px;
}
#blogPost_content img {
  width: 100%;
}
#blogPost_content p {
  font-size: 17px;
  margin: 0;
}
</style>
