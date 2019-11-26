<template>
  <div id="login">
    <router-link to="/">Home</router-link>
    <form>
      <h1>Sign In</h1>
      <p>{{ errorMsg }}</p>
      <label for="email">Email:</label>
      <input v-model="email" id="email" type="email" />
      <label for="passowrd">Password:</label>
      <input v-model="password" type="password" />
      <button @click="login" id="password" type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      //loading: false,
      errorMsg: ""
    };
  },
  props: {
    //data here
  },
  components: {},
  beforeMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) this.$router.replace("admin");
  },
  methods: {
    async login(e) {
      e.preventDefault();
      //this.loading = true

      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          //console.log(user)
          //this.loading = false
          this.$router.replace("admin");
          return user;
        })
        .catch(error => {
          //this.loading = false
          this.errorMsg = error.message;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
