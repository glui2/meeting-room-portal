import Vue from "vue";
import router from "../router";
import axios from "axios";
import store from "@/store";

import { AxiosAuthHttp } from "vue-adal";
import Axios from "axios";

const token = "";

Vue.use({
  install(vue) {
    vue.prototype.$mrmApi = AxiosAuthHttp.createNewClient({
      axios: axios,
      resourceId: process.env.VUE_APP_BASE_API_URL, //process.env.VUE_APP_GRAPH_BASE_URL,
      router: router,
      baseUrl: process.env.VUE_APP_BASE_API_URL,
      headers: {
        Authorization: "Bearer",
        "Content-Type": "application/json"
      },
      onTokenSuccess(http, context, token) {
        if (context.user) {
          store.commit("setUser", context.user);
          store.commit("setToken", token);
          this.token = token;
        }
      },
      onTokenFailure(error) {
        console.log("Failed to get token" + error);
      }
    });
  }
});

// Intercept requests made through axios and apply the following configs
Axios.interceptors.request.use(
  function(config) {
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${this.token}`;
    }
    return config;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);
