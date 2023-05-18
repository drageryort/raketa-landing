import { createI18n } from "vue-i18n";
import { isRef } from "vue";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ua from "./locales/ua.json";

import type { I18n, Locale, VueI18n, Composer, I18nMode } from "vue-i18n";

const i18n = createI18n({
  fallbackLocale: "en",
  defaultLocal: "en",
  locale: "en",
  legacy: false,
  globalInjection: true,
  messages: { en, ru, ua },
});

//Checker for composition API
const isComposition = (
  instance: VueI18n | Composer,
  mode: I18nMode
): instance is Composer => mode === "composition" && isRef(instance.locale);

const setLocale = (i18n: I18n, locale: Locale): void => {
  isComposition(i18n.global, i18n.mode)
    ? (i18n.global.locale.value = locale || "en") //Variant for composition API
    : (i18n.global.locale = locale || "en"); //Variant for option API
};

export { i18n, setLocale };
