<template>
  <div class="layout-default">
    <NavBar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default {
  name: "LayoutDefault",
  props: {
    //data here
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
