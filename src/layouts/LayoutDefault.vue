<template>
  <div class="layout-default">
    <div id="mobile-nav" :span="12" v-if="mobile">
      <router-link to="/">
        <h1>
          Lovebug & Co.
          <br />
          <span>photography</span>
        </h1>
      </router-link>
      <Slide noOverlay width="300">
        <router-link to="/">home</router-link>
        <router-link to="/portfolio/love">love</router-link>
        <router-link to="/portfolio/family">family</router-link>
        <router-link to="/portfolio/portraits">portraits</router-link>
        <router-link to="/blog">blog</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <div id="social">
          <a href="https://www.instagram.com/lovebugandco.photography/" target="_blank">
            <img alt="instagram" src="../assets/icons/instagram.svg" />
          </a>
          <a href="https://www.facebook.com/heather.cunningham.967" target="_blank">
            <img alt="facebook" src="../assets/icons/facebook.svg" />
          </a>
          <a href="mailto:lovebugandco.photos@gmail.com" target="_blank">
            <img alt="email " src="../assets/icons/mail.svg" />
          </a>
        </div>
      </Slide>
    </div>
    <el-col v-else :span="12">
      <el-menu :router="true" id="default-nav" background-color="#00000000">
        <div id="logo">
          <el-menu-item class="logo" index="/">
            <h1>
              Lovebug & Co.
              <br />
              <span>photography</span>
            </h1>
          </el-menu-item>
        </div>
        <div id="menu">
          <el-submenu index="1">
            <template slot="title">work</template>
            <el-menu-item index="/portfolio/love">love</el-menu-item>
            <el-menu-item index="/portfolio/family">family</el-menu-item>
            <el-menu-item index="/portfolio/portraits">portraits</el-menu-item>
          </el-submenu>
          <el-menu-item index="/blog">blog</el-menu-item>
          <el-menu-item index="/about">about</el-menu-item>
          <el-menu-item index="/contact">contact</el-menu-item>
        </div>
        <div id="social">
          <a href="https://www.instagram.com/lovebugandco.photography/" target="_blank">
            <img alt="instagram" src="../assets/icons/instagram.svg" />
          </a>
          <a href="https://www.facebook.com/heather.cunningham.967" target="_blank">
            <img alt="facebook" src="../assets/icons/facebook.svg" />
          </a>
          <a href="mailto:lovebugandco.photos@gmail.com" target="_blank">
            <img alt="email " src="../assets/icons/mail.svg" />
          </a>
        </div>
      </el-menu>
    </el-col>
    <main id="default-main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "LayoutDefault",
  data() {
    return {
      mobile: true
    };
  },
  components: {
    Slide // Register your component
  },
  mounted() {
    window.innerWidth <= 1000 ? (this.mobile = true) : (this.mobile = false);
    window.onresize = () => {
      window.innerWidth <= 1000 ? (this.mobile = true) : (this.mobile = false);
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");

/* MOBILE */
#mobile-nav {
  display: flex;
  justify-content: center;
  margin: 0 !important;
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
/* DESKTOP NAV */
#default-nav {
  top: 0;
  padding-top: 55px;
  border: none;
  width: 19%;
  height: 100%;
  position: fixed;
  text-align: center;
}
/* DESKTOP MAIN */
#default-main {
  margin: 0 20px 0 18.5%;
  padding-top: 50px;
}
/* BREAKPOINTS */
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
/* LOGO */
#logo {
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
}
#logo .el-menu-item h1 {
  font-family: "Pacifico", cursive;
  line-height: 35px;
  color: #303133;
}
#logo .el-menu-item span {
  font-family: "Solway", serif;
  font-size: 15px;
  font-weight: 400;
}
/* MENU */
#menu {
  margin-bottom: 60px;
}
#menu .el-submenu .el-menu-item {
  font-size: 13px;
}
#menu .el-submenu__title,
#menu .el-menu-item {
  font-family: "Solway", serif;
  font-size: 16px;
  padding: 0 !important;
}
#menu .el-submenu__icon-arrow {
  padding-top: 1px;
  right: 90px;
}
/* SOCIAL */
#default-nav #social {
  display: flex;
  margin: 50px auto 0 auto;
  width: 110px;
  justify-content: space-between;
}
#default-nav #social img {
  width: 20px;
}

#mobile-nav #social {
  display: flex;
  width: 110px;
  justify-content: flex-start;
}
#mobile-nav #social img {
  width: 20px;
  margin-right: 20px;
}
#default-nav .el-menu-item:hover,
#default-nav .el-submenu__title:hover {
  background-color: #00000000 !important;
}
#menu .el-menu-item:hover,
#menu .el-submenu__title:hover {
  text-decoration: underline;
}
#menu .el-menu-item.is-active {
  text-decoration: underline;
  color: rgb(48, 49, 51);
}

.bm-burger-button {
  width: 25px !important;
  height: 20px !important;
}
#mobile-nav .bm-menu {
  background-color: rgb(241, 241, 241) !important;
}
#mobile-nav .bm-item-list a {
  color: black !important;
  font-family: "Solway", serif;
}
</style>
