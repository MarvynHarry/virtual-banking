import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/WidgetB.js", // Archivo de entrada para Widget B
      name: "WidgetB", // Nombre global del Widget B
      fileName: (format) => `widget-b.${format}.js`,
      formats: ["umd"], // Formato UMD para compatibilidad global
    },
  },
});
