import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from "@/views/AppMain";
import AppTravel from "@/views/AppTravel";
import AppUser from "@/views/AppUser";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/travel",
    name: "travel",
    component: AppTravel,
  },
  {
    path: "/user",
    name: "user",
    component: AppUser,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
