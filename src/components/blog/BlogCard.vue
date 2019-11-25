<template>
  <div class="blogCard">
    <h2 class="postTitle">{{ title }}</h2>
    <p class="postDate">{{ formattedDate }}</p>
    <p class="postContent">{{ content }}</p>
    <button v-if="authenticated" @click="deleteBlogPost(id)">DELTE POST</button>
  </div>
</template>

<script>
import firebase from "firebase";
//import { db } from "../../main";

export default {
  name: "BlogCard",
  props: ["title", "time", "content", "id", "deleteBlogPost"],
  data() {
    return {
      authenticated: false
    };
  },
  computed: {
    formattedDate: function() {
      const dateObj = new Date(this.time);
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

      return monthNames[month] + " " + date + " " + year;
    }
  },
  beforeMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) this.authenticated = true;
  }
  // methods: {
  //   deleteBlogPost() {
  //     db.collection("blogPosts")
  //       .doc(this.id)
  //       .delete()
  //       .then(() => {
  //         console.log(this.id, " successfully delted");
  //       })
  //       .catch(error => {
  //         console.error("Error removing document:", error);
  //       });
  //   }
  // }
};
</script>

<style></style>
