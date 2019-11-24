<template>
  <layout-default>
    <div id="about">
      <p>this is an about page</p>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue"

export default {
  name: "Home",
  props: {
    //data here
  },
  components: { LayoutDefault }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
