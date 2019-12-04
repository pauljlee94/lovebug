<template>
  <div class="layout-default">
    <el-col :span="12">
      <el-menu class="default-nav">
        <router-link to="/">
          <el-menu-item index="0">Lovebug & Co.</el-menu-item>
        </router-link>
        <el-submenu index="1">
          <template slot="title">
            <span>work</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
        </el-submenu>
        <router-link to="/blog">
          <el-menu-item index="2">
            <span>blog</span>
          </el-menu-item>
        </router-link>
        <router-link to="/about">
          <el-menu-item index="3">
            <span>about</span>
          </el-menu-item>
        </router-link>
        <router-link to="/contact">
          <el-menu-item index="4">
            <span>contact</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
    <main class="default-main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
// import NavBar from "../components/NavBar"
// import Footer from "../components/Footer"

export default {
  name: "LayoutDefault",
  props: {
    //data here
  },
  components: {
    // NavBar,
    // Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.default-main {
  margin: 0 2% 0 25%;
}
.default-nav {
  top: 0;
  /* border: none; */
  width: 23%;
  height: 100%;
  position: fixed;
}
.default-nav a {
  text-decoration: none;
}
</style>
