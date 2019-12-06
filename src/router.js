import Vue from "vue"
import firebase from "firebase"
import Router from "vue-router"

// PAGES
import Public from "./pages/public/Public.vue"
import Home from "./pages/public/Home.vue"
import About from "./pages/public/About.vue"
import Blog from "./pages/public/Blog.vue"
import PortfolioLove from "./pages/public/PortfolioLove.vue"
import PortfolioFamily from "./pages/public/PortfolioFamily.vue"
import PortfolioPortraits from "./pages/public/PortfolioPortraits.vue"
import Contact from "./pages/public/Contact.vue"
import Login from "./pages/admin/Login.vue"
import Admin from "./pages/admin/Admin.vue"
import AdminHome from "./pages/admin/AdminHome.vue"
import AdminBlog from "./pages/admin/AdminBlog.vue"
import NewBlogPost from "./components/blog/NewBlogPost.vue"
import BlogPost from "./components/blog/BlogPost.vue"
import AdminPortfolio from "./pages/admin/AdminPortfolio.vue"
import NewPortfolio from "./components/portfolio/NewPortfolio.vue"
import AdminSchedule from "./pages/admin/AdminSchedule.vue"

import NotFound from "./pages/public/NotFound"

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
      name: "public",
      component: Public,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "/portfolio/love",
          name: "PortfolioLove",
          component: PortfolioLove
        },
        {
          path: "/portfolio/family",
          name: "PortfolioFamily",
          component: PortfolioFamily
        },
        {
          path: "/portfolio/portraits",
          name: "PortfolioPortraits",
          component: PortfolioPortraits
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
        }
      ]
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
      },
      children: [
        {
          path: "/",
          name: "adminHome",
          component: AdminHome
        },
        {
          path: "blog",
          name: "adminBlog",
          component: AdminBlog
        },
        {
          path: "blog/new",
          name: "newBlogPost",
          component: NewBlogPost
        },
        {
          path: "portfolio/new",
          name: "newPortfolio",
          component: NewPortfolio
        },
        {
          path: "blog/:id",
          name: "BlogPost",
          component: BlogPost
        },
        {
          path: "portfolio",
          name: "adminPortfolio",
          component: AdminPortfolio
        },
        {
          path: "schedule",
          name: "adminSchedule",
          component: AdminSchedule
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next("login")
  else next()
})

export default router
