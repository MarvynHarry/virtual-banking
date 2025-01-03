import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/WidgetA.js", // Archivo de entrada
      name: "WidgetA",
      fileName: (format) => `widget-a.${format}.js`,
      formats: ["umd"],
    },
  },
});
