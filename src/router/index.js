import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: AppHome,
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/AppUser"),
    children: [
      {
        path: "signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/UserSignup"),
      },
      {
        path: "signin",
        name: "signin",
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/UserSignin"),
      },
    ],
  },
  {
    path: "/travel",
    name: "travel",
    component: () => import(/* webpackChunkName: "travel" */ "@/views/AppTravel"),
    redirect: "/travel/list",
    children: [
      {
        path: "mylist",
        name: "travelmylist",
        component: () => import(/* webpackChunkName: "travel" */ "@/components/travel/TravelList"),
      },
      {
        path: "taggedlist",
        name: "traveltaggedlist",
        component: () => import(/* webpackChunkName: "travel" */ "@/components/travel/TravelList"),
      },
      {
        path: "create",
        name: "travelcreate",
        component: () =>
          import(/* webpackChunkName: "travel" */ "@/components/travel/TravelCreate"),
      },
      {
        path: "view/:travelno",
        name: "travelview",
        component: () => import(/* webpackChunkName: "travel" */ "@/components/travel/TravelView"),
      },
      {
        path: "modify",
        name: "travelmodify",
        component: () =>
          import(/* webpackChunkName: "travel" */ "@/components/travel/TravelModify"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
