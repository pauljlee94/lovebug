<template>
  <div id="admin">
    <el-card class="adminCard">
      <div slot="header" class="clearfix">
        <h2 class="cardTitle">Manage Blog</h2>
      </div>
      <router-link to="/admin/blog">
        <!-- <div class="image blog"> -->
        <img src="../../assets/images/pencil.jpg" />
        <!-- </div> -->
      </router-link>
    </el-card>
    <el-card class="adminCard">
      <div slot="header" class="clearfix">
        <h2 class="cardTitle">Manage Portfolio</h2>
      </div>
      <router-link to="/admin/portfolio">
        <!-- <div class="image portfolio"> -->
        <img src="../../assets/images/camera.jpg" />
        <!-- </div> -->
      </router-link>
    </el-card>
    <el-card class="adminCard">
      <div slot="header" class="clearfix">
        <h2 class="cardTitle">Manage Schedule</h2>
      </div>
      <router-link to="/admin/schedule">
        <!-- <div class="image schedule"> -->
        <img src="../../assets/images/clock.jpg" />
        <!-- </div> -->
      </router-link>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Admin",
  components: {}
};
</script>

<style>
.adminCard {
  height: 190px;
  margin: 20px 0;
}
.adminCard .el-card__body {
  position: relative;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  height: 150px; /* or other desired height */
  overflow: hidden;
}
.adminCard .el-card__header {
  padding: 10px;
  height: 40px;
}
.adminCard a {
  text-decoration: none;
  color: black;
  width: 100%;
  flex: none;
}
.adminCard .image {
  display: inline-block;
  height: 140px;
  width: 100%;
  line-height: 150px;

  overflow: hidden;
}

.adminCard h2 {
  font-weight: 400;
  margin: 0;
  font-size: 18px;
  padding: 0;
}

.adminCard img {
  /* display: inline-block; */
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}
</style>
