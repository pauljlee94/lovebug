<template>
  <div>
    <el-col :span="24" class="admin-nav-container">
      <el-menu
        class="admin-nav"
        v-bind:class="{expanded: !isCollapse}"
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
          <a href="/">
            <i class="el-icon-house"></i>
            <span>Lovebug & Co.</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/admin/blog">
            <i class="el-icon-collection"></i>
            <span>Blog</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/admin/portfolio">
            <i class="el-icon-picture-outline"></i>
            <span>Portfolio</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/admin/schedule">
            <i class="el-icon-date"></i>
            <span>Schedule</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/admin/blog/new">
            <i class="el-icon-circle-plus-outline"></i>
            <span>New Post</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/admin/portfolio/new">
            <i class="el-icon-circle-plus-outline"></i>
            <span>New Photo</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a @click="logout">
            <i class="el-icon-user"></i>
            <span>Log out</span>
          </a>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="main-content">
      <main>
        <slot />
      </main>
    </el-col>
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
<style>
</style>
