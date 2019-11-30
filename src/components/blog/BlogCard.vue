<template>
  <el-card class="blogCard">
    <div slot="header" class="clearfix">
      <h2 class="postTitle">{{ title }}</h2>
      <p class="postDate">{{ formattedDate }}</p>
    </div>
    <div v-html="content"></div>
    <div class="footer">
      <el-button type="primary" v-if="authenticated" @click="viewPost">
        <i class="el-icon-edit"></i>
      </el-button>
      <el-button type="danger" v-if="authenticated" @click="deleteBlogPost(id)">
        <i class="el-icon-delete"></i>
      </el-button>
    </div>
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
/* Admin Blog Card */
.blogCard {
  position: relative;
  padding: 0px;
  margin: 40px 0 40px 0;
}
.blogCard .el-card__header {
  padding: 10px 15px 10px 15px;
}
.blogCard h2 {
  font-size: 20px;
  margin: 0;
  font-weight: 500;
}
.blogCard .postDate {
  margin: 5px 0 5px 0;
  color: rgb(156, 156, 156);
}
.blogCard .el-card__body {
  height: 270px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 15px 0px 15px;
  margin: 10px 0 38px 0;
}
.blogCard p {
  font-size: 14px;
  margin: 5px 0 5px 0;
}
.blogCard img {
  width: 100%;
}
.blogCard .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
}
.blogCard .el-button {
  margin: 0;
  width: 50%;
}
</style>
