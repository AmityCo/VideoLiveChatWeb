import Vue from "vue";
import VueRouter from "vue-router";

import routes from './routes'
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.state.user && to.path !== '/login')
    return next({ path: '/login' })

  next()
})

export default router;
