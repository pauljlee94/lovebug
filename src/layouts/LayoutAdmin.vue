<template>
  <div>
    <el-col :span="24" class="admin-nav-container">
      <el-menu
        class="admin-nav expandedMenu"
        mode="vertical"
        :router="true"
        :collapse="isCollapse"
        background-color="#2C3F52"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item @click="handleMenuClick">
          <i v-if="isCollapse" class="el-icon-s-unfold" />
          <i v-else class="el-icon-s-fold" />
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span>Lovebug & Co.</span>
        </el-menu-item>
        <el-menu-item index="/admin/blog" @click="closeMenu">
          <i class="el-icon-collection"></i>
          <span>Blog</span>
        </el-menu-item>
        <el-menu-item index="/admin/portfolio" @click="closeMenu">
          <i class="el-icon-picture-outline"></i>
          <span>Portfolio</span>
        </el-menu-item>
        <el-menu-item index="/admin/schedule" @click="closeMenu">
          <i class="el-icon-date"></i>
          <span>Schedule</span>
        </el-menu-item>
        <el-menu-item index="/admin/blog/new" @click="closeMenu">
          <i class="el-icon-tickets"></i>
          <span>New Post</span>
        </el-menu-item>
        <el-menu-item index="/admin/portfolio/new" @click="closeMenu">
          <i class="el-icon-camera"></i>
          <span>New Photo</span>
        </el-menu-item>
        <el-menu-item @click="closeMenu, logoutDialogVisible = true">
          <i class="el-icon-error"></i>
          <span>Log out</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="main-content">
      <main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
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
    },
    closeMenu() {
      this.isCollapse = true;
    }
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
