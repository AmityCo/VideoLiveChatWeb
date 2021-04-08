import Vue from "vue";
import Vuex from "vuex";

import EkoClient from "eko-sdk";

Vue.use(Vuex);
const apiKey = "b3bee90c39d9a5644831d84e5a0d1688d100ddebef3c6e78";
// const apiKey = process.env.VUE_APP_ASC_APIKEY;
const client = EkoClient.create({ apiKey });

export default new Vuex.Store({
  state: () => ({
    user: null,
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
  },
});
