<template>
  <masonry id="photoWall" :cols="{ default: 3, 1600: 2, 900: 1 }" :gutter="10">
    <!-- <div class="item" v-for="image in images" :key="image.name"> -->
    <img
      v-for="image in images"
      :key="image.name"
      v-lazy="image.url_h"
      v-img:group
      :src="image.url_h"
    />
    <!-- </div> -->
  </masonry>
</template>

<script>
import axios from "axios";
import flickrConfig from "../../../flickr.config";

export default {
  name: "PortfolioList",
  props: ["location-id"],
  data() {
    return {
      images: [],
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
      photos.forEach(photo => {
        this.images.unshift(photo);
        this.srcList.unshift(photo.url_c);
        //NEED TO ORDER BY NEWEST PICTURE
        // console.log(new Date(photo.datetaken));
      });
    });
  }
};
</script>

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
