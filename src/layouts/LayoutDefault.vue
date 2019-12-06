<template>
  <div class="layout-default">
    <el-col id="mobile-nav" :span="12" v-if="mobile">
      <!-- <a id="hamburger">test</a> -->
      <router-link to="/">
        <h1>
          Lovebug & Co.
          <br />
          <span>photography</span>
        </h1>
      </router-link>
    </el-col>
    <el-col v-else :span="12">
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
          <a href="https://www.instagram.com/lovebugandco.photography/" target="_blank">
            <img src="../assets/icons/instagram.svg" />
          </a>
          <a href="https://www.facebook.com/heather.cunningham.967" target="_blank">
            <img src="../assets/icons/facebook.svg" />
          </a>
          <a href="mailto:lovebugandco.photos@gmail.com" target="_blank">
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
  data() {
    return {
      mobile: true
    };
  },
  components: {
    // NavBar,
    // Footer
  },
  methods: {},
  mounted() {
    window.innerWidth <= 1000 ? (this.mobile = true) : (this.mobile = false);
    window.onresize = () => {
      window.innerWidth <= 1000 ? (this.mobile = true) : (this.mobile = false);
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");

#logo .el-menu-item h1 {
  font-family: "Pacifico", cursive;
  line-height: 35px;
  color: #303133;
}
#mobile-nav {
  width: 100%;
  text-align: center;
  margin: 20px auto 10px auto;
}
#mobile-nav h1 {
  font-family: "Pacifico", cursive;
  font-size: 25px;
  line-height: 30px;
}
#mobile-nav a {
  color: #303133;
  text-decoration: none;
}
#mobile-nav span {
  font-weight: 400;
  font-size: 15px;
}
#logo .el-menu-item span {
  font-family: "Solway", serif;
  font-size: 15px;
  font-weight: 400;
}
#hamburger {
  float: left;
}
#logo {
  /* font-family: "Solway", serif; */
  margin-bottom: 50px;
}
#logo .el-menu-item {
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
  margin: 50px auto 0 auto;
  width: 110px;
  justify-content: space-between;
}
#social img {
  width: 20px;
}
#social a:hover {
  opacity: 60%;
}
#default-main {
  margin: 50px 20px 0 18.5%;
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
    margin-left: 245px;
  }
}

@media screen and (max-width: 1100px) {
  #default-nav h1 {
    font-size: 2.5vw;
  }
  #logo .el-menu-item span {
    font-size: 1.4vw;
  }
  #default-nav span {
    font-size: 14px;
  }
}

@media screen and (max-width: 1000px) {
  #default-main {
    margin: 0px 15px 0 5px;
  }
  #default-main img {
    width: 100%;
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
