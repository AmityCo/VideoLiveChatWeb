import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import "./assets/main.scss";

import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.use(Buefy);
Vue.use(VueVirtualScroller);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
