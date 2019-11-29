<template>
  <el-card id="login">
    <form>
      <el-row>
        <h1>Sign In</h1>
      </el-row>
      <el-row>
        <p>{{ errorMsg }}</p>
      </el-row>
      <el-row>
        <!-- <label for="email">Email:</label> -->
        <el-input placeholder="email" v-model="email" id="email" type="email" />
      </el-row>
      <el-row>
        <!-- <label for="passowrd">Password:</label> -->
        <el-input placeholder="password" v-model="password" type="password" />
      </el-row>
      <el-row>
        <el-button @click="login" id="password" type="submit">Log In</el-button>
      </el-row>
    </form>
  </el-card>
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
<style scoped>
#login {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: auto;
  width: 90vw;
  text-align: center;
}
.el-input {
  margin-bottom: 25px;
}
</style>
