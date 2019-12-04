<template>
  <layout-default>
    <div id="home">
      <masonry :cols="{ default: 3, 900: 2, 550: 1 }" :gutter="10">
        <div class="item" v-for="(image, index) in images.test" :key="index">
          <img :src="image" />
        </div>
      </masonry>
    </div>
  </layout-default>
</template>

<script>
import { db } from "../../main"

import LayoutDefault from "../../layouts/LayoutDefault.vue"

export default {
  name: "Home",
  components: {
    LayoutDefault
  },
  data() {
    return {
      images: {
        test: []
      }
    }
  },
  created() {
    const databaseRef = db.collection("images").orderBy("time")
    databaseRef.get().then(images => {
      images.forEach(image => {
        const data = image.data()
        if (data.category === "test") {
          this.images.test.push(
            `https://firebasestorage.googleapis.com/v0/b/lovebug-a27e6.appspot.com/o/test%2F${data.name}?alt=media`
          )
        }
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
.item {
  margin-bottom: 5px;
}

.item img {
  width: 100%;
}
</style>
