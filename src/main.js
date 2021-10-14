import Vue from 'vue'
import VueResource from "vue-resource";
import router from "./router";
import { store } from "./store/store";

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
