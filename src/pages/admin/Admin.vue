<template>
  <layout-admin>
    <div id="admin">
      <router-view></router-view>
    </div>
  </layout-admin>
</template>

<script>
import LayoutAdmin from "../../layouts/LayoutAdmin.vue";

export default {
  name: "Admin",
  components: { LayoutAdmin }
};
</script>

<style></style>
