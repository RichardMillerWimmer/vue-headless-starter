<template>
  <div id="app">
    <TopBar @showUpdater="showUpdater = true" />
    <div id="wrapper">
      <Updater v-if="showUpdater" :error="error" @close="showUpdater = false" />
      <Loading
        v-if="loadingOn"
        :message="loadingMessage"
        :showWheel="loadingWheel"
      />
      <router-view :key="this.viewKey"></router-view>
    </div>
    <Foot />
  </div>
</template>

<script>
import bus from "./bus";
import Foot from "./components/Foot";
import Loading from "./components/Loading";
import Updater from "./components/Updater";
import TopBar from "./components/TopBar";
import News from "./views/News";

export default {
  name: "App",
  components: {
    News
  },

  data() {
    return {
      error: "",
      loadingOn: true,
      loadingMessage: "Loading",
      loadingWheel: true,
      showUpdater: false,
      viewKey: 0
    };
  },

  created: function() {
    bus.$on("toggleLoading", (status = true) => {
      if (typeof status === "string") {
        this.loadingOn = true;
        this.showWheel = false;
        this.loadingMessage = status;
        return;
      }

      this.loadingMessage = "Loading...";
      this.loadingWheel = true;
      this.loadingOn = status;
    });

    bus.$on("bumpViewKey", loadingMessage => {
      bus.$emit("toggleLoading", loadingMessage);
      this.viewKey = this.viewKey + 1;
    });

    bus.$on("showUpdater", errorMessage => {
      this.showUpdater = true;
      this.error = errorMessage;
    });

    bus.$on("clearError", () => {
      this.error = "";
    });
  },

  methods: {},

  components: {
    Foot,
    Loading,
    Updater,
    TopBar
  }
};
</script>

<style lang="scss">
@import "assets/scss/_base.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
