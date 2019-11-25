<template>
  <nav>
    <h1>
      <router-link to="/">
        <img src="../assets/logo.png" alt="Lovebug&Co. Homepage Logo" />
      </router-link>
    </h1>
    <div id="nav-links">
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    //data here
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
