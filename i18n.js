import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru.json";
import en from "./locales/en.json";
import ja from "./locales/jp.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ja: { translation: ja }
    },
    lng: "ru",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
