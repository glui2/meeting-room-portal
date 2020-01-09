<template>
  <v-app>
    <v-toolbar color="white">
      <v-btn
        to="/"
        flat
        active-class
        :disabled="$route.meta.disableLogoHomeButton"
      >
        my<strong>Workplace</strong>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items v-show="$route.meta.showNavBar">
        <v-btn class="subtitle-2" to="/buildings" flat active-class="blue--text"
          >Buildings</v-btn
        >
        <v-btn class="subtitle-2" to="/reports" flat active-class="blue--text"
          >Reports</v-btn
        >
        <v-btn class="subtitle-2" to="/audit" flat active-class="blue--text"
          >Audit</v-btn
        >
        <v-btn class="subtitle-2" to="/config" flat active-class="blue--text"
          >Configurations</v-btn
        >
        <v-btn
          class="subtitle-2"
          to="/workrequests"
          flat
          active-class="blue--text"
          >Work Requests</v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
* {
  text-transform: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
}

.v-content {
  text-transform: none;
  background: url(assets/images/background-green.png) center center fixed;
  background-position: center;
  background-size: cover;
}

.v-toolbar__items {
  margin-right: 142px;
}
</style>
