import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart({
      server: { entry: "src/server.ts" },
      // Pre-render every page to static HTML at build time.
      // Works perfectly since this site has no server-side data or auth.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
    }),
    react(),
  ],
});
