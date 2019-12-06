<template>
  <layout-default>
    <PortfolioList location-id="72157712079765717" />
  </layout-default>
</template>

<script>
import LayoutDefault from "../../layouts/LayoutDefault.vue";
import PortfolioList from "../../components/portfolio/PortfolioList.vue";

export default {
  name: "PortfolioLove",
  components: { LayoutDefault, PortfolioList }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
