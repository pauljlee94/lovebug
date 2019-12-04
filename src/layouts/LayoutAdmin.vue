<template>
  <div>
    <el-col :span="24" class="admin-nav-container">
      <el-menu
        class="admin-nav expandedMenu"
        mode="vertical"
        :collapse="isCollapse"
        :default-active="activeIndex"
        background-color="#2C3F52"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="0">
          <i v-if="isCollapse" class="el-icon-s-unfold" @click="handleMenuClick"></i>
          <i v-else class="el-icon-s-fold" @click="handleMenuClick"></i>
        </el-menu-item>
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-house"></i>
            <span>Lovebug & Co.</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/blog">
          <el-menu-item index="2" @click="closeMenu">
            <i class="el-icon-collection"></i>
            <span>Blog</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/portfolio">
          <el-menu-item index="3" @click="closeMenu">
            <i class="el-icon-picture-outline"></i>
            <span>Portfolio</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/schedule">
          <el-menu-item index="4" @click="closeMenu">
            <i class="el-icon-date"></i>
            <span>Schedule</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/blog/new">
          <el-menu-item index="5" @click="closeMenu">
            <i class="el-icon-tickets"></i>
            <span>New Post</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/portfolio/new">
          <el-menu-item index="6" @click="closeMenu">
            <i class="el-icon-camera"></i>
            <span>New Photo</span>
          </el-menu-item>
        </router-link>
        <a @click="logoutDialogVisible = true">
          <el-menu-item index="7" @click="closeMenu">
            <i class="el-icon-error"></i>
            <span>Log out</span>
          </el-menu-item>
        </a>
      </el-menu>
    </el-col>
    <el-col class="main-content">
      <main>
        <router-view></router-view>
      </main>
    </el-col>
    <el-dialog
      id="logoutWarning"
      title="Log Out Warning"
      :visible.sync="logoutDialogVisible"
      center
    >
      <span>Are you sure you want to log out?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logout">Log Out</el-button>
        <el-button @click="logoutDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LayoutAdmin",
  data() {
    return {
      logoutDialogVisible: false,
      isCollapse: true,
      activeIndex: null
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
    },
    closeMenu() {
      this.isCollapse = true;
    }
  },
  props: {
    //data here
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#logoutWarning .el-dialog {
  margin-top: 30vh !important;
  width: 80vw;
}

#logoutWarning .el-dialog__body {
  text-align: center;
}
</style>
