import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Callback from "../views/Callback.vue";
import banding from "../views/banding.vue";
import dropANDdrag from "../views/dropANDdrag.vue";
import firstPage from "../views/firstPage/firstPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
  },
  {
    path: "/banding",
    name: "banding",
    component: banding,
  },
  {
    path: "/dropANDdrag",
    name: "dropANDdrag",
    component: dropANDdrag,
  },
  {
    path: "/firstPage",
    name: "firstPage",
    component: firstPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
