<template>
  <div id="admin">
    <h1>Admin Home</h1>
    <el-card class="adminCard">
      <a href="">
        <div class="image blog">
          <img src="../../assets/images/pencil.jpg" />
        </div>
        <h2>Manage Blog</h2>
      </a>
    </el-card>
    <el-card class="adminCard">
      <a href="">
        <div class="image portfolio">
          <img src="../../assets/images/camera.jpg" />
        </div>
        <h2>Manage Portfolio</h2>
      </a>
    </el-card>
    <el-card class="adminCard">
      <a href="">
        <div class="image 3">
          <img src="../../assets/images/clock.jpg" />
        </div>
        <h2>Manage Schedule</h2>
      </a>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Admin",
  components: {}
}
</script>

<style>
.adminCard {
  height: 190px;
  margin: 20px 0;
}
.adminCard .el-card__body {
  padding: 0;
}
.adminCard a {
  text-decoration: none;
  color: black;
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
  padding: 10px;
}

.adminCard img {
  display: inline-block;
  width: 100%;
  object-fit: contain;
  transform: translateY(-20%);
}
</style>
