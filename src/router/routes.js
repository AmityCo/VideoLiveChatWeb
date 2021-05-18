import { ClientInstance } from "@/chatbox/sdkInstance";

export default [
  {
    path: "/",
    redirect: () => {
      if (ClientInstance.isInitial())
        return { name: `/home/${ClientInstance.getUserID()}` };

      return { name: "login" };
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/home/:userId",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
];
