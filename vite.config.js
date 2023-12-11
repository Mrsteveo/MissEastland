import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
  base: "https://www.misseastlands.org/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        topNavbar: resolve(__dirname, "pages/topNavbar/index.html"),
      },
    },
  },
});
