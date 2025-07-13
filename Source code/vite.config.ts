import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin to copy CNAME file to dist
const copyCNAME = () => ({
  name: 'copy-cname',
  writeBundle() {
    // Copy CNAME file to dist folder
    if (fs.existsSync('CNAME')) {
      fs.copyFileSync('CNAME', 'dist/CNAME');
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    react(),
    copyCNAME(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Copy CNAME and other important files to dist
  publicDir: 'public',
}));
