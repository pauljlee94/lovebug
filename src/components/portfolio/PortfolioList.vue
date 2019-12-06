<template>
  <!-- <div id="home"> -->
  <masonry id="photoWall" :cols="{ default: 3, 1600: 2, 900: 1 }" :gutter="10">
    <!-- <el-image
          v-for="(image, index) in images"
          :key="index"
          :src="image.url_c"
          :preview-src-list="srcList"
          lazy
    ></el-image>-->
    <div class="item" v-for="(image, index) in images" :key="index">
      <!-- <img v-lazy="image.url_c" /> -->
      <img v-lazy="image.url_h" v-img:group :src="image.url_h" />
    </div>
  </masonry>
  <!-- </div> -->
</template>

<script>
// import { db } from "../../main";
import axios from "axios";
import flickrConfig from "../../../flickr.config";

// import LayoutDefault from "../../layouts/LayoutDefault.vue"

export default {
  name: "PortfolioList",
  components: {
    // LayoutDefault
  },
  props: ["location-id"],
  data() {
    return {
      images: null,
      srcList: []
    };
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
          photoset_id: this.locationId,
          extras: "url_h, date_taken",
          format: "json",
          nojsoncallback: 1
        }
      });
    }
  },
  created() {
    this.fetchImages().then(response => {
      const photos = response.data.photoset.photo;
      this.images = photos;
      photos.forEach(photo => {
        this.srcList.push(photo.url_c);
        //NEED TO ORDER BY NEWEST PICTURE
        // console.log(new Date(photo.datetaken));
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#photoWall {
  width: 100%;
  margin: 0 !important;
}
#photoWall img {
  margin-bottom: 5px;
  width: 100%;
}
.fullscreen-v-img .content-v-img img {
  border: 20px white solid;
}
@media screen and (max-width: 1000px) {
  .fullscreen-v-img .content-v-img img {
    border: 10px white solid;
  }
}
</style>
