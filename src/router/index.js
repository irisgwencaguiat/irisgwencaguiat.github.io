import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("@/pages/Blogs.vue"),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: () => import("@/pages/Blog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
