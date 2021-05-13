import Vue from "vue";
import EkoClient from "eko-sdk";

export const chatbox_bus = new Vue();

chatbox_bus.$on("api_key_updated", (key) => {
  const client = EkoClient.create({ apiKey: key });
  Vue.prototype.$client = client;
});
