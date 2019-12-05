<template>
  <div id="home">
    <masonry :cols="{ default: 3, 900: 2, 550: 1 }" :gutter="10">
      <!-- <el-image
          v-for="(image, index) in images"
          :key="index"
          :src="image.url_c"
          :preview-src-list="srcList"
          lazy
        ></el-image> -->
      <div class="item" v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image.url_c" /> -->
        <img v-lazy="image.url_c" v-img:group :src="image.url_c" />
      </div>
    </masonry>
  </div>
</template>

<script>
// import { db } from "../../main";
import axios from "axios"
import flickrConfig from "../../../flickr.config"

// import LayoutDefault from "../../layouts/LayoutDefault.vue"

export default {
  name: "PortfolioList",
  components: {
    // LayoutDefault
  },
  data() {
    return {
      images: null,
      srcList: []
    }
  },
  methods: {
    fetchImages() {
      return axios({
        method: "get",
        url: "https://api.flickr.com/services/rest/",
        params: {
          method: "flickr.photosets.getPhotos",
          api_key: flickrConfig.api_key,
          user_id: flickrConfig.user_id,
          photoset_id: flickrConfig.test,
          extras: "url_c",
          format: "json",
          nojsoncallback: 1
        }
      })
    }
  },
  created() {
    this.fetchImages().then(response => {
      const photos = response.data.photoset.photo
      this.images = photos
      photos.forEach(photo => {
        this.srcList.push(photo.url_c)
        console.log(this.srcList)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  width: 100%;
  margin-top: 20px;
}
.item img {
  margin-bottom: 5px;
  width: 100%;
}
</style>
