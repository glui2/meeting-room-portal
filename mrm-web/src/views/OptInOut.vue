<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <transition name="fade">
        <v-snackbar
          absolute
          class="black--text text-center snackbar ma-4"
          v-model="optedInSnackbar"
          color="lightGreen"
          :timeout="timeOutMilliseconds"
          top
        >
          <v-icon color="black">
            check_circle_outline
          </v-icon>
          You have been opted in.
        </v-snackbar>
      </transition>
      <transition name="fade">
        <v-snackbar
          absolute
          class="black--text text-center snackbar ma-4"
          v-model="optedOutSnackbar"
          color="lightGreen"
          :timeout="timeOutMilliseconds"
          top
        >
          <v-icon color="black">
            check_circle_outline
          </v-icon>
          You have been opted out.
        </v-snackbar>
      </transition>
      <transition name="fade">
        <v-snackbar
          absolute
          class="black--text text-center snackbar ma-4"
          v-model="optedOutDirectReportSnackbar"
          color="lightGreen"
          :timeout="timeOutMilliseconds"
          top
        >
          <v-icon color="black">
            check_circle_outline
          </v-icon>
          {{ directReportEmail }} has been opted out.
        </v-snackbar>
      </transition>
      <v-flex justify-center xs11 sm10 md8 lg8 xl6 mb-5>
        <v-card class="elevation-10 pa-5 ma-auto" color="white" v-if="optMeOutCard">
          <h1 class="darkGreen--text headline pa-2 font-weight-bold">
            Opt me <span v-if="optedIn">out of</span
            ><span v-if="!optedIn">in to</span> Find a Colleague
          </h1>
          <h4 class="ma-3 pa-2">
            Thanks for being part of myWorkplace.<br />
            You are currently
            <span class="blue--text" v-if="optedIn">opted in</span
            ><span class="blue--text" v-else>opted out</span> to this feature.
          </h4>
          <div class="caption ma-3">
            <p></p>
            The Find a Colleague feature is a great way to find a team member in
            an activity-based work environment.
            <span v-show="optedIn"
              >If you would prefer not to be a part of this feature, you can opt
              out below.</span
            >
            <p></p>
          </div>
          <v-layout column>
            <v-flex>
              <v-btn
                v-if="optedIn"
                class="white--text ma-3"
                color="blue"
                top
                v-on:click="optOut"
                >Opt me out</v-btn
              >
              <v-btn
                v-else
                class="white--text ma-3"
                top
                color="blue"
                v-on:click="optIn"
                >Opt back in</v-btn
              >
            </v-flex>
            <v-flex>
              <v-btn class="caption blue--text" text flat v-on:click="showDirectReportOptOut">
                Or, opt out a direct report
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="elevation-10 pa-5 ma-auto" color="white" v-if="!optMeOutCard">
          <h1 class="darkGreen--text headline pa-2 font-weight-bold">
            Opt out my Direct Report
          </h1>
          <div class="caption ma-3">
            Enter the email of the person who wants to opt out.
          </div>
          <v-layout column>
            <v-flex>
              <v-layout justify-center row wrap>
                <v-flex lg9 xl8>
                  <v-text-field class="email-text-field" label="Enter an email" outline v-model="directReportEmail" hide-details>
                  </v-text-field>
                </v-flex>
                <v-flex lg2 xl1>
                  <v-btn
                    class="white--text"
                    color="blue"
                    height="100%"
                    top
                    v-on:click="optOutDirectReport"
                    >Opt out</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-btn class="caption blue--text ma-3" top text flat v-on:click="showOptMeOut">
                Or, opt me out
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "optinout",
  data: function() {
    return {
      directReportEmail: '',
      isManager: true,
      optedIn: true,
      optedInSnackbar: false,
      optMeOutCard: true,
      optedOutSnackbar: false,
      optedOutDirectReportSnackbar: false,
      timeOutMilliseconds: 3000
    };
  },
  methods: {
    optOut() {
      this.optedIn = false;
      this.optedOutSnackbar = true;
    },
    optIn() {
      this.optedIn = true;
      this.optedInSnackbar = true;
    },
    optOutDirectReport(){
      this.optedOutDirectReportSnackbar = true;
    },
    showDirectReportOptOut(){
      return this.optMeOutCard = false;
    },
    showOptMeOut(){
      return this.optMeOutCard = true;
    }
  }
};
</script>

<style scoped>
.email-text-field {
  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
