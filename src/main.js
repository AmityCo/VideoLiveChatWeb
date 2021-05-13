import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import "./assets/main.scss";

import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.use(Buefy);
Vue.use(VueVirtualScroller);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
