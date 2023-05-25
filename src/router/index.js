import { createRouter, createWebHistory } from "vue-router";
// import AppHome from "@/views/AppHome.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "user" */ "@/components/user/UserProfile"), 
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/AppUser"), 
    // redirect: "/user/Profile",
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
      {
        path: "profile",
        name: "Edit Profile",
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/UserProfileModify"),
      },
    ],
  },
  {
    path: "/travel",
    name: "travel",
    component: () => import(/* webpackChunkName: "travel" */ "@/views/AppTravel"),
    redirect: "/travel/mylist",
    children: [
      {
        path: "mylist",
        name: "My Travels",
        component: () => import(/* webpackChunkName: "travel" */ "@/components/travel/TravelList"),
      },
      {
        path: "taggedlist",
        name: "Tagged Travel",
        component: () => import(/* webpackChunkName: "travel" */ "@/components/travel/TravelList"),
      },
      {
        path: "create",
        name: "travelcreate",
        component: () =>
          import(/* webpackChunkName: "travel" */ "@/components/travel/TravelCreate"),
      },
      {
        path: "view/:travelid",
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
  {
    path: "/attraction",
    name: "attraction",
    component: () => import(/* webpackChunkName: "travel" */ "@/views/AppAttraction"),
    redirect: "/attraction/attractionlist",
    children: [
      {
        path: "attractionlist",
        name: "Attraction List",
        component: () => import(/* webpackChunkName: "attraction" */ "@/components/attraction/AttractionList"),
      },
      {
        path: "view",
        name: "attractionview",
        component: () => import(/* webpackChunkName: "attraction" */ "@/components/attraction/AttractionView"),
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