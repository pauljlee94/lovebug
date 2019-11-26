<template>
  <div class="blogCard">
    <h2 class="postTitle">{{ title }}</h2>
    <p class="postDate">{{ formattedDate }}</p>
    <div class="postContent" v-html="content"></div>
    <button v-if="authenticated" @click="viewPost">EDIT</button>
    <button v-if="authenticated" @click="deleteBlogPost(id)">DELTE</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "BlogCard",
  props: ["title", "time", "content", "id", "deleteBlogPost"],
  data() {
    return {
      authenticated: false
    }
  },
  computed: {
    formattedDate: function() {
      const dateObj = new Date(this.time)
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
      ]
      const year = dateObj.getFullYear()
      const month = dateObj.getMonth()
      const date = dateObj.getDate()

      return monthNames[month] + " " + date + " " + year
    }
  },
  beforeMount() {
    const currentUser = firebase.auth().currentUser
    if (currentUser) this.authenticated = true
  },
  methods: {
    viewPost() {
      this.$router.push("/admin/blog/" + this.id)
    }
  }
}
</script>

<style></style>
