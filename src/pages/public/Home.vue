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
