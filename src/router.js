import Vue from "vue"
import firebase from "firebase"

//Views
import Router from "vue-router"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Blog from "./pages/Blog.vue"
import Contact from "./pages/Contact.vue"
import Login from "./pages/Login.vue"
import Admin from "./pages/Admin.vue"
import NotFound from "./pages/NotFound"

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "404",
      component: NotFound
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next("login")
  //else if (currentUser) next("admin")
  else next()
})

export default router
