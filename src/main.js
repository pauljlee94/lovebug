import Vue from "vue"

import firebase from "firebase"
import "firebase/firestore"
import firebaseConfig from "../firebase.config"

import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
firebase.analytics()

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app")
  }
})
