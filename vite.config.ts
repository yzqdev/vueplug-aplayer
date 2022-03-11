import * as path from 'path';
import {UserConfigExport, ConfigEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import { homepage } from './package.json';

const libBuildOptions = {
  outDir: path.resolve(__dirname, 'lib'),
  lib: {
    entry: path.resolve(__dirname, './src/index.js'),
    name: 'vueplug-aplayer'
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue'
      }
    }
  }
};

export default ({mode}: ConfigEnv): UserConfigExport => {
  console.log('mode：', mode);

  return {
    // base: mode === 'preview' ? homepage : '/',
    publicDir: mode === 'production' ? false : './dist',
    server: {
      host: 'localhost',
      open: true,
      port: 3344,
      https: false
    },
    resolve: {
      alias: {
        // 键必须以斜线开始和结束
        '@': path.resolve(__dirname, './dev')
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        inject : 'body-last' ,

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
    ],

    build: mode === 'production' ? libBuildOptions : {}
  };
};