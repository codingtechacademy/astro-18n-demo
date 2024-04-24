import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/config/i18n";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale,
    locales,
  },
});
