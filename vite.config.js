import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import graphqlLoader from "vite-plugin-graphql-loader";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    graphqlLoader(),
  ],
  server: {
    proxy: {
      '/graphql':
        {
          target: 'https://venia.magento.com',
          changeOrigin: true,
          secure: false,
        },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
