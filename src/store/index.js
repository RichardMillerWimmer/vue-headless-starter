import Vue from "vue";
import Vuex from "vuex";
import cache from "./modules/cache";
import bus from "../bus";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endpoint: VUE_APP_REST_ENDPOINT
  },

  mutations: {
    updateEndpoint(state, endpoint) {
      state.endpoint = endpoint;
      bus.$emit("clearError");
      bus.$emit("bumpViewKey", "Updating content...");
    }
  },

  modules: {
    cache
  }
});
