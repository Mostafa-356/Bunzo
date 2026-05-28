import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  define: {
    global: "window",
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // Build optimizations
  build: {
    // Vite 8 uses Rolldown's built-in oxc minifier (faster than terser)
    minify: true,
    
    // Generate source maps for debugging (disable in production)
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Rollup/Rolldown output options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'react-vendor';
          if (id.includes('node_modules/react-router-dom/')) return 'router-vendor';
          if (id.includes('node_modules/@headlessui/') || id.includes('node_modules/@heroicons/')) return 'ui-vendor';
          if (id.includes('node_modules/draft-js') || id.includes('node_modules/react-draft-wysiwyg')) return 'editor-vendor';
          if (id.includes('node_modules/aos/') || id.includes('node_modules/swiper/')) return 'animation-vendor';
        },
        
        // Asset file naming
        assetFileNames: (assetInfo: { name?: string }) => {
          const info = assetInfo.name?.split('.') || [];
          const extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        
        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  
  // Development server options
  server: {
    port: 5173,
    host: true, // Allow external connections
    open: true, // Auto-open browser
  },
  
  // Preview server options
  preview: {
    port: 4173,
    host: true,
  },
  
  // CSS options
  css: {
    devSourcemap: true,
  },
  
  // Resolve options
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

