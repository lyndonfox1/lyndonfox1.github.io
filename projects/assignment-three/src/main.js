
import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import Home from "./components/home/Home.vue";
import Lyndon from "./components/lyndon/Lyndon.vue";

import LyndonDesigners from "./components/lyndon/LyndonDesigners.vue";
import LyndonProjects from "./components/lyndon/LyndonProjects.vue";
import LyndonProjectDetails from "./components/lyndon/LyndonProjectDetails.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/lyndon", component: Lyndon },
  { path: "/lyndon-designers", component: LyndonDesigners },
  { path: "/lyndon-projects", component: LyndonProjects, name: "projects", props: true },
  { path: "/ProjectDetails", component: LyndonProjectDetails, name: "ProjectDetails", props: true }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
