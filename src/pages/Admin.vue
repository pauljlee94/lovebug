<template>
  <div id="admin">
    <h1>admin</h1>
    <button @click="logout">Sign Out</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Admin",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login")
        })
    }
  }
}
</script>

<style></style>
