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
      /> -->
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="(image, index) in images.test" :key="index">
        <img :src="image.src" />
      </el-carousel-item>
    </el-carousel>
    <el-carousel trigger="click" :autoplay="false">
      <el-carousel-item v-for="(image, index) in images.test2" :key="index">
        <img :src="image.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import firebase from "firebase"
import { db } from "../../main"

export default {
  name: "AdminPortfolio",
  data() {
    return {
      images: {
        test: [],
        test2: []
      }
    }
  },
  created() {
    const databaseRef = db.collection("images").orderBy("time")
    databaseRef.get().then(images => {
      images.forEach(image => {
        const data = image.data()
        if (data.category === "test") {
          this.images.test.push(data)
        } else if (data.category === "test2") {
          this.images.test2.push(data)
        }

        console.log(this.images.test)
      })
    })
  }
}
</script>

<style scoped>
.el-carousel {
  height: 300px;
  width: 100%;
}
.el-carousel__item {
}

.el-carousel img {
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>
