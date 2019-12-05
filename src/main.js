import Vue from "vue"

import firebase from "firebase"
import "firebase/firestore"
import firebaseConfig from "../firebase.config"

import ElementUI from "element-ui"
import VueMasonry from "vue-masonry-css"
import VueLazyload from "vue-lazyload"
import VueImg from "v-img"

import "element-ui/lib/theme-chalk/index.css"
import "@/assets/global.css"

import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
firebase.analytics()

Vue.use(ElementUI)
Vue.use(VueMasonry)
Vue.use(VueLazyload)
Vue.use(VueImg)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app")
  }
})
