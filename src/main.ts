import "@/assets/styles/style.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./i18n/index";
import { useI18n } from "vue-i18n";

createApp(App, {
  setup() {
    const { t } = useI18n({
      useScope: "global",
    });
    return { t };
  },
})
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
