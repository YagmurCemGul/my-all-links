import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  colorMode: {
    classSuffix: "",
  },
  icon: {
    collections: {
      zondicons: () => import("@iconify-json/zondicons/icons.json").then((m) => m.default),
      pixel: () => import("@iconify-json/pixel/icons.json").then((m) => m.default),
      tabler: () => import("@iconify-json/tabler/icons.json").then((m) => m.default),
      "simple-icons": () =>
        import("@iconify-json/simple-icons/icons.json").then((m) => m.default),
    },
  },
  vite: {
    define: {
      "__VUE_PROD_DEVTOOLS__": false,
      "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__": false,
    },
  },
});
