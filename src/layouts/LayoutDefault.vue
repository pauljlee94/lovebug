<template>
  <div class="layout-default">
    <el-col :span="12">
      <el-menu class="default-nav" background-color="#00000000">
        <router-link to="/">
          <el-menu-item class="logo" index="0">
            <h1>
              Lovebug & Co.
              <br />
              <span>photography</span>
            </h1>
          </el-menu-item>
        </router-link>
        <el-submenu index="1">
          <template slot="title">
            <!-- <router-link to="/portfolio"> -->
            <span>work</span>
            <!-- </router-link> -->
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
  },
  methods: {
    test() {
      console.log("test")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Satisfy&display=swap");
.logo h1 {
  font-family: "Satisfy", cursive;
  line-height: 30px;
}
.logo span {
  font-size: 15px;
  font-weight: 400;
}
.logo {
  margin-bottom: 50px;
  text-align: center;
}
.default-main {
  margin: 0 2% 0 22%;
}
.default-nav {
  top: 0;
  padding-top: 10px;
  /* border: none; */
  width: 20%;
  height: 100%;
  position: fixed;
}
.default-nav a {
  text-decoration: none;
  color: #303133;
}
.default-nav .el-menu-item:hover,
.default-nav .el-submenu__title:hover {
  text-decoration: underline;
  background-color: #00000000 !important;
}
</style>
