import Vue from "vue";
import Vuex from "vuex";

import EkoClient from "eko-sdk";

Vue.use(Vuex);
// const apiKey = process.env.VUE_APP_APIKEY;
// Hardcode for using with codesandbox
const apiKey = "b0ece00b388ff9371d668b1a550e148bd55cddeae83d6e2d";
const client = EkoClient.create({ apiKey });

export default new Vuex.Store({
  state: () => ({
    user: null,
    channel: null,
  }),
  actions: {
    async login({ commit }, userId) {
      await new Promise((resolve) => {
        client.once("connectionStatusChanged", resolve);
        client.registerSession({ userId });
      });
      commit("setUser", client.currentUser.model);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setChannel(state, channel_id) {
      state.channel = channel_id;
    },
  },
});
