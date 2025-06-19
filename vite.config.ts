import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/pratik-vaishnav.github.io/" : "/",
  define: {
    "import.meta.env.BASE_URL": JSON.stringify(
      mode === "production" ? "/pratik-vaishnav.github.io/" : "/",
    ),
  },

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react()],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode !== "production",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Use .js extension instead of .mjs to avoid MIME type issues on GitHub Pages
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash][extname]",
      },
    },
    // Use esbuild instead of terser for better GitHub Pages compatibility
    minify: "esbuild",
    target: "esnext",
    // Ensure proper module format
    cssCodeSplit: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
