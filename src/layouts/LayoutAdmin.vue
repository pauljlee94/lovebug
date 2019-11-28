<template>
  <div>
    <el-col :span="24">
      <el-menu
        class="admin-nav"
        mode="vertical"
        :collapse="isCollapse"
        background-color="#2C3F52"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i v-if="isCollapse" class="el-icon-arrow-right" @click="handleMenuClick"></i>
          <i v-if="!isCollapse" class="el-icon-arrow-left" @click="handleMenuClick"></i>

          <!-- <span>
            <a href="/">Lovebug & Co.</a>
          </span>-->
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-house"></i>
          <span>
            <a href="/">Lovebug & Co.</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-collection"></i>
          <span>
            <a href="/admin/blog">Blog</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture-outline"></i>
          <span>
            <a href="/admin/portfolio">Portfolio</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-date"></i>
          <span>
            <a href="/admin/schedule">Schedule</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-circle-plus-outline"></i>
          <span>
            <a href="/admin/blog/new">New Post</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-circle-plus-outline"></i>
          <span>
            <a href="/admin/portfolio/new">New Photo</a>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-user"></i>
          <span>
            <a @click="logout">LOG OUT</a>
          </span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LayoutAdmin",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    },
    handleMenuClick() {
      this.isCollapse = !this.isCollapse;
    }
  },
  props: {
    //data here
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-nav {
  height: 100vh;
}
.admin-nav a {
  text-decoration: none;
  /* font-size: 10px; */
  color: white;
  padding-left: 12px;
}
</style>
