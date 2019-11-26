<template>
  <layout-default>
    <div id="home">
      <h1>Home</h1>
      <Scheduler />
    </div>
  </layout-default>
</template>

<script>
//import { db } from "../../main"

import LayoutDefault from "../../layouts/LayoutDefault.vue"
import Scheduler from "../../components/forms/Scheduler.vue"

export default {
  name: "Home",
  props: {
    //data here
  },
  components: {
    LayoutDefault,
    Scheduler
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
