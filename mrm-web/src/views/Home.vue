<template>
  <v-container fill-height>
    <v-layout justify-center column>
      <v-flex xs10 align-center column>
        <div class="white--text pt-5">
          <p></p>
          <h1 class="display-3 font-weight-bold pt-5" v-if="user">
            Welcome, {{ user }}
          </h1>
          <p></p>
          <p class="title">Select a tile below to explore.</p>
        </div>
      </v-flex>
      <v-flex xs12 md11>
        <v-layout justify-center row wrap>
          <v-flex v-if="$route.meta.showBuildingsButton" xs12 md3 lg2>
            <v-card
              class="menu-button elevation-10 ma-auto my-3"
              height="150px"
              width="150px"
              hover
              ripple
            >
              <v-responsive :aspect-ratio="1">
                <v-img
                  class="card-image ma-auto mt-4"
                  :src="require('../assets/icons/building.png')"
                ></v-img>
                <p class="subtitle-1 black--text pa-3">Buildings</p>
              </v-responsive>
            </v-card>
          </v-flex>
          <v-divider
            class="mx-3 white"
            :vertical="$vuetify.breakpoint.smAndUp"
            light
          ></v-divider>
          <v-flex v-if="$route.meta.showManageFaultsButton" xs12 md3 lg2>
            <v-card
              class="menu-button elevation-10 ma-auto my-3"
              height="150px"
              width="150px"
              hover
              ripple
            >
              <v-responsive :aspect-ratio="1">
                <v-img
                  class="card-image ma-auto mt-4"
                  :src="require('../assets/icons/toolbox.png')"
                ></v-img>
                <p class="subtitle-1 black--text pa-3">Manage Faults</p>
              </v-responsive>
            </v-card>
          </v-flex>
          <v-flex v-if="$route.meta.showReportsButton" xs12 md3 lg2>
            <v-card
              class="menu-button elevation-10 ma-auto my-3"
              height="150px"
              width="150px"
              hover
              ripple
            >
              <v-responsive :aspect-ratio="1">
                <v-img
                  class="card-image ma-auto mt-4"
                  :src="require('../assets/icons/reports.png')"
                ></v-img>
                <p class="subtitle-1 black--text pa-3">Reports</p>
              </v-responsive>
            </v-card>
          </v-flex>
          <v-flex v-if="$route.meta.showWorkRequestsButton" xs12 md3 lg2>
            <v-card
              class="menu-button elevation-10 ma-auto my-3"
              height="150px"
              width="150px"
              hover
              ripple
            >
              <v-responsive :aspect-ratio="1">
                <div class="ml-1">
                  <v-img
                    class="card-image ma-auto mt-4 ml-5"
                    :src="require('../assets/icons/work-requests.png')"
                  ></v-img>
                </div>
                <p class="subtitle-1 black--text pa-3">Work Requests</p>
              </v-responsive>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex justify-end class="mt-4" xs4 md2>
        <v-layout justify-end>
          <v-btn class="elevation-3" color="lightGreen" round>Help</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
  computed: {
    user() {
      if (this.$store.state.user) {
        return this.$store.state.user.profile.name;
      }
      return null;
    }
  }
};
</script>

<style>
.menu-button.v-sheet {
  border-radius: 12px;
}

.v-card .card-image {
  width: 60px;
  height: 60px;
}

.v-divider {
  opacity: 0.5;
  transform: scale(0.6);
}
</style>
