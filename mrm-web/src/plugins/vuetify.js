import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/src/stylus/app.styl";
import "../stylus/main.styl";

// define stylings
Vue.use(Vuetify, {
  theme: {
    blue: "#007AC5",
    darkGreen: "074F30",
    lightGreen: "#B2E6B2",
    white: "#F4F4F4"
  }
});
