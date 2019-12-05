<template>
  <layout-default>
    <PortfolioList />
  </layout-default>
</template>

<script>
// import { db } from "../../main";
// import axios from "axios"
// import flickrConfig from "../../../flickr.config"

import LayoutDefault from "../../layouts/LayoutDefault.vue"
import PortfolioList from "../../components/portfolio/PortfolioList.vue"

export default {
  name: "Home",
  components: { LayoutDefault, PortfolioList }
  // data() {
  //   return {
  //     images: null,
  //     srcList: []
  //   }
  // },
  // methods: {
  //   fetchImages() {
  //     return axios({
  //       method: "get",
  //       url: "https://api.flickr.com/services/rest/",
  //       params: {
  //         method: "flickr.photosets.getPhotos",
  //         api_key: flickrConfig.api_key,
  //         user_id: flickrConfig.user_id,
  //         photoset_id: flickrConfig.test,
  //         extras: "url_c",
  //         format: "json",
  //         nojsoncallback: 1
  //       }
  //     })
  //   }
  // },
  // created() {
  //   this.fetchImages().then(response => {
  //     const photos = response.data.photoset.photo
  //     this.images = photos
  //     photos.forEach(photo => {
  //       this.srcList.push(photo.url_c)
  //       console.log(this.srcList)
  //     })
  //   })
  // }
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
