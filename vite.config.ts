import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 项目站路径须与仓库名一致；HashRouter 避免子路径刷新 404
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/personal-homepage/",
});
