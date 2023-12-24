import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store";
import middlewarePipeline from "@/router/middlewares/middlewarePipeline";
import auth from "@/router/middlewares/auth";

import AppLayoutMain from "@/layouts/AppLayoutMain.vue";
import AppLayoutProfile from "@/layouts/AppLayoutProfile.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/IndexView.vue"),
      meta: {
        layout: AppLayoutMain,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/views/ProfileView.vue"),
      meta: {
        layout: AppLayoutProfile,
        middlewares: [auth],
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const middlewares = to.meta.middlewares;
  if (!middlewares?.length) {
    return next();
  }

  // Запускаем обход по цепочке проверок
  const context = {
    to,
    from,
    next,
    // store,
  };
  const firstMiddlewareIndex = 0;
  const nextMiddlewareIndex = 1;
  return middlewares[firstMiddlewareIndex]({
    ...context,
    nextMiddleware: middlewarePipeline(
      context,
      middlewares,
      nextMiddlewareIndex
    ),
  });
});

export default router;
