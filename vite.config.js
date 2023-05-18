/*
 * @Description: 
 * @Author: sunjun
 * @Date: 2023-03-12 09:04:06
 * @LastEditors: sunjun
 * @LastEditTime: 2023-05-18 09:21:53
 */
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path';

const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "./",
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT,
        },
        {
          find: 'src/',
          replacement: REPLACEMENT,
        },
      ],
    },
    plugins: [
      createVuePlugin(/* options */)
    ],
    esbuildTarget: 'es2017',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/index.ts'),
        },
        output: {
          format: 'esm',
          entryFileNames: '[name].mjs',
        },
        external: ['element-plus','element-ui','vue'],
      },
    },
  })
}


