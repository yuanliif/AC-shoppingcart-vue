import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: MainPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
