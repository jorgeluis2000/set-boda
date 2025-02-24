import i18n from "i18next";
import Backend from "i18next-fs-backend";
import i18nextMiddleware from "i18next-http-middleware";
import path from "node:path";

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, "../../../src/utils/locales/{{lng}}/{{ns}}.json"),
    },
    fallbackLng: "es",
    preload: ["en", "es"],
    saveMissing: true,
    debug: false,
  });

export default i18n;
