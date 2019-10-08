import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Editor from "@/components/Editor";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor
    },
    {
      path: "/customise",
      name: "customise",
      component: () => import("@/components/Customise")
    }
  ]
});
