import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    props: true,
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: function () {
      return import("../pages/ErrorPage.vue");
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
