import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { i18n, setLocale } from "@/i18n";

import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/:locale?",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const paramsLocale = (to.params.locale as string) || "en";
  setLocale(i18n, paramsLocale);
});

export default router;
