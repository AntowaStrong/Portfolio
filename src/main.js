import Vue from "vue";
import Vuebar from 'vuebar';
import App from "./App.vue";

Vue.config.productionTip = false;


Vue.use(Vuebar);

new Vue({
  render: h => h(App)
}).$mount("#app");
