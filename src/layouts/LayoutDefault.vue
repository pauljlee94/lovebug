<template>
  <div class="layout-default">
    <el-col :span="12">
      <el-menu id="default-nav" background-color="#00000000">
        <div id="logo">
          <router-link to="/">
            <el-menu-item class="logo" index="0">
              <h1>
                Lovebug & Co.
                <br />
                <span>photography</span>
              </h1>
            </el-menu-item>
          </router-link>
        </div>
        <div id="menu">
          <el-submenu index="1">
            <template slot="title">
              <!-- <router-link to="/portfolio"> -->
              <span>work</span>
              <!-- </router-link> -->
            </template>
            <el-menu-item index="1-1">
              <span>item one</span>
            </el-menu-item>
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
        </div>
        <div id="social">
          <a href="https://www.facebook.com" target="_blank">
            <img src="../assets/icons/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/lovebugandco.photography/" target="_blank">
            <img src="../assets/icons/instagram.svg" />
          </a>
          <a href="mailto:test@test.com" target="_blank">
            <img src="../assets/icons/mail.svg" />
          </a>
        </div>
      </el-menu>
    </el-col>
    <main id="default-main">
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
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");

#logo .el-menu-item h1 {
  font-family: "Pacifico", cursive;
  line-height: 30px;
  color: #303133;
}
#logo .el-menu-item span {
  font-family: "Solway", serif;
  font-size: 15px;
  font-weight: 400;
}
#logo .el-menu-item {
  /* font-family: "Solway", serif; */
  margin-bottom: 50px;
  text-align: center;
}
#menu {
  width: 100%;
  text-align: center;
}
#menu .el-submenu__title,
#menu .el-menu-item {
  width: 100px;
  margin: auto;
}
#menu .el-submenu__icon-arrow {
  padding-top: 3px;
}
#social {
  display: flex;
  margin: 30px auto 0 auto;
  width: 80px;
  justify-content: space-between;
}
#social img {
  width: 15px;
}
#default-main {
  margin: 50px 10px 0 20%;
}
#default-nav {
  top: 0;
  padding-top: 55px;
  border: none;
  width: 19%;
  height: 100%;
  position: fixed;
}

@media screen and (min-width: 1345px) {
  #default-nav {
    width: 250px;
  }
  #default-main {
    margin-left: 265px;
  }
}

#default-nav a {
  text-decoration: none;
  color: #303133;
}
/* .default-nav .el-menu-item,
.default-nav .el-submenu__title{
  width: 60px;
} */

#default-nav .el-menu-item:hover,
#default-nav .el-submenu__title:hover {
  text-decoration: underline;
  background-color: #00000000 !important;
}
</style>
