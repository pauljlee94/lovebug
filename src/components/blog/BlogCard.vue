<template>
  <el-card class="admin-blogCard" :body-style="{ padding: '0px' }">
    <div slot="header" class="clearfix">
      <el-button v-if="authenticated" @click="viewPost">EDIT</el-button>
      <el-button v-if="authenticated" @click="deleteBlogPost(id)">DELTE</el-button>
    </div>
    <h2 class="postTitle">{{ title }}</h2>
    <p class="postDate">{{ formattedDate }}</p>
    <div v-html="content"></div>
  </el-card>
</template>

<script>
import firebase from "firebase";

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

      return monthNames[month] + " " + date + ", " + year;
    }
  },
  beforeMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) this.authenticated = true;
  },
  methods: {
    viewPost() {
      this.$router.push("/admin/blog/" + this.id);
    }
  }
};
</script>

<style>
/* .admin-blogCard {
  margin: auto;
  width: 350px;
  height: 500px;
}
.admin-blogCard img {
  width: 100%;
}

.admin-blogCard h2,
.admin-blogCard p {
  padding: 0 10px 0 10px;
} */
</style>
