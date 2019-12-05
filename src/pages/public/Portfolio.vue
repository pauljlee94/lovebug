<template>
  <layout-default>
    <div>
      <h1>{{ this.$route.params.id }}</h1>
      <Scheduler />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../layouts/LayoutDefault.vue"

export default {
  name: "Portfolio",
  props: {
    //data here
  },
  components: { LayoutDefault }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
