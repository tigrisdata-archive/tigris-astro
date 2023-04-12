import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
// import nodePolyfills from 'rollup-plugin-polyfill-node'

const name = 'astro-tigris'

export default defineConfig(() => {
  return {
    plugins: [dts()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "astro-tigris",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        plugins: [
          // nodePolyfills({
          //   include: ['node_modules/**/*.js', '../../node_modules/**/*.js'],
          // }),
        ]
      }
    },
    resolve: {
      alias: {
        // process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
        // buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
        // events: 'rollup-plugin-node-polyfills/polyfills/events',
        // util: 'rollup-plugin-node-polyfills/polyfills/util',
        // sys: 'util',
        // stream: 'rollup-plugin-node-polyfills/polyfills/stream',
        // _stream_duplex:
        //   'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
        // _stream_passthrough:
        //   'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
        // _stream_readable:
        //   'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
        // _stream_writable:
        //   'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
        // _stream_transform:
        //   'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
      }
    },
    // optimizeDeps: {
    //   esbuildOptions: {
    //     define: {
    //       global: 'globalThis'
    //     },
    //     plugins: [
    //       NodeGlobalsPolyfillPlugin({
    //         process: true,
    //       }),
    //       NodeModulesPolyfillPlugin(),
    //     ],
    //   }
    // }
  }
})