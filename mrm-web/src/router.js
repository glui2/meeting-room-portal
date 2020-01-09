import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import * as Constants from "./constants";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: Constants.homePageMeta
    },
    {
      path: "/buildings",
      name: "buildings",
      component: () => import("./views/Buildings.vue"),
      meta: Constants.meta
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("./views/Reports.vue"),
      meta: Constants.meta
    },
    {
      path: "/audit",
      name: "audit",
      component: () => import("./views/Audit.vue"),
      meta: Constants.meta
    },
    {
      path: "/config",
      name: "config",
      component: () => import("./views/Config.vue"),
      meta: Constants.meta
    },
    {
      path: "/workrequests",
      name: "workrequests",
      component: () => import("./views/WorkRequests.vue"),
      meta: Constants.meta
    },
    {
      path: "/optinout",
      name: "optinout",
      component: () => import("./views/OptInOut.vue"),
      meta: Constants.optInOutMeta
    }
  ]
});
