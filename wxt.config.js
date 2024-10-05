import { defineConfig } from 'wxt';

export default defineConfig({
  input: {
    background: "entrypoints/Background.ts", // Entry point for the background service worker
    popup: "entrypoints/popup/main.tsx", // Entry point for the popup
    content: "entrypoints/Content.ts", // Entry point for the content script
  },
  output: {
    dir: "dist", // Specify the output directory
    format: "esm", // Specify output format if necessary
    sourcemap: true, // Generate sourcemaps for easier debugging
  },
  // Additional configurations can go here if needed
});
