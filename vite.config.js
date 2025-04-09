import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path';
import { webcrypto } from 'crypto';

global.crypto = webcrypto;

export default defineConfig({
  base: '/llll_mgr_dev/',
  assetsDir: './',
  transpileDependencies: true,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    vuetify(),
  ],
  server: {
    host: '0.0.0.0', // ネットワーク経由でアクセス可能にする
    port: 8080,      // 必要に応じてポート番号を変更
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        // JavaScript ファイルを js フォルダに出力
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          // フォントファイルを font フォルダに出力
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name][extname]';
          }
          // 画像ファイルを img フォルダに出力
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name)) {
            return 'img/[name][extname]';
          }
          // CSS ファイルを css フォルダに出力
          if (/\.css$/.test(assetInfo.name)) {
            return 'css/[name][extname]';
          }
          // その他のアセットは assets フォルダに出力
          return 'assets/[name][extname]';
        },
      },
    },
  },
})
