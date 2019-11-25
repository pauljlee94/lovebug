<template>
  <layout-default>
    <div id="about">
      <h1>About</h1>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue"

export default {
  name: "About",
  props: {
    //data here
  },
  components: { LayoutDefault }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
