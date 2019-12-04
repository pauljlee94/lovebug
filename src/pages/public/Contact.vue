<template>
  <layout-default>
    <div id="contact">
      <h1>Contact</h1>
      <Scheduler />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../layouts/LayoutDefault.vue";
import Scheduler from "../../components/forms/Scheduler";

export default {
  name: "Contact",
  props: {
    //data here
  },
  components: { LayoutDefault, Scheduler }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
