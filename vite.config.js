import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Served from https://peterc8191.github.io/stecon/ — change to "/" if a custom domain is added
  base: "/stecon/",
});
