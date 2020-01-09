import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "babel-polyfill";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

import "./plugins/axios";
import "./plugins/adal";
import "./plugins/vuetify";
import "./stylus/main.styl";

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log(process.env);
    // Sample call with Graph API
    // this.$mrmApi.get("/v1.0/me", {
    //   baseURL: process.env.VUE_APP_GRAPH_BASE_URL,
    // }).then(function(response) {
    //   console.log(response);
    // });

    // this.$mrmApi.get("/api/Locations").then(function(response) {
    //   console.log(response);
    // });
  }
}).$mount("#app");
