<template>
  <div>
    <h1>Manage Portfolio</h1>
    <router-link to="/admin/portfolio/new">
      <el-button style="width: 100%">New Photo</el-button>
    </router-link>
    <h2>Test</h2>
    <!-- <img
        class="image"
        src="https://firebasestorage.googleapis.com/v0/b/lovebug-a27e6.appspot.com/o/test%2F{{NAME HERE}}?alt=media"
    />-->
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="(image, index) in images.test" :key="index">
        <img :src="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import firebase from "firebase"
import { db } from "../../main";

export default {
  name: "AdminPortfolio",
  data() {
    return {
      images: {
        test: []
      }
    };
  },
  created() {
    const databaseRef = db.collection("images").orderBy("time");
    databaseRef.get().then(images => {
      images.forEach(image => {
        const data = image.data();
        if (data.category === "test") {
          this.images.test.push(
            `https://firebasestorage.googleapis.com/v0/b/lovebug-a27e6.appspot.com/o/test%2F${data.name}?alt=media`
          );
        }
      });
    });
  }
};
</script>

<style scoped>
.el-carousel {
  height: 300px;
  width: 100%;
}
.el-carousel__item {
  height: 100%;
  /* position: relative; */
  overflow: hidden;
  /* text-align: center; */
}

.el-carousel img {
  max-height: 100%;
  /* width: 100%; */
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
