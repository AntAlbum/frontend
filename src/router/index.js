import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/views/AppHome.vue";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";

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
        path: "/signin",
        name: "Signin",
        component: Signin,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

export default router;
