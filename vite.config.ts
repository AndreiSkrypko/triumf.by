import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { leadApiDevPlugin } from "./src/server/lead-api-dev-plugin";

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tailwindcss(), tsConfigPaths(), leadApiDevPlugin()],
});
