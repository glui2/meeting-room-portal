import Vue from "vue";
import router from "../router";
import Adal from "vue-adal";

Vue.config.productionTip = false;

Vue.use(Adal, {
  config: {
    tenant: process.env.VUE_APP_TENANT_ID,
    clientId: process.env.VUE_APP_CLIENT_ID,
    redirectUri: process.env.VUE_APP_REDIRECT_URI,
    cacheLocation: "localStorage"
  },
  requireAuthOnInitialize: true,
  router: router
});
