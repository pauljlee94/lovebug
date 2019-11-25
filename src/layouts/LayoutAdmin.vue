<template>
  <div class="layout-admin">
    <nav>
      <h1>Admin</h1>
      <a href="/admin/blog">Blog</a>
      <a href="/admin/portfolio">Portfolio</a>
      <a href="/admin/schedule">Schedule</a>
      <a href="/admin/blog/new">New Blog Post</a>
      <!-- <a href="/admin/portfolio/new">New Blog Post</a> -->
      <button @click="logout">LOG OUT</button>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LayoutAdmin",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    }
  },
  props: {
    //data here
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
