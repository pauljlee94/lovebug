<template>
  <div>
    <el-menu
      class="admin-nav"
      mode="horizontal"
      background-color="#2C3F52"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="/">Lovebug & Co.</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="/admin/blog">Blog</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="/admin/portfolio">Portfolio</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="/admin/schedule">Schedule</a>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button>
          <a href="/admin/blog/new">New Blog Post</a>
        </el-button>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button>
          <a href="/admin/portfolio/new">New Photo</a>
        </el-button>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button @click="logout">LOG OUT</el-button>
      </el-menu-item>
    </el-menu>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LayoutAdmin",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    }
  },
  props: {
    //data here
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-nav a {
  text-decoration: none;
  padding: 10px;
}
</style>
