import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Table from "../components/Table.vue";
import Form from "../components/Form.vue";


const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "*", redirect: "/page/form" },
    { path: "/page/form", component: Form },
    { path: "/page/table", component: Table }
  ]
});

export default router;
