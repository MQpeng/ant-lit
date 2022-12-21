import { defineConfig } from 'vite';
import less from 'less';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

export default defineConfig({
  // plugins: [
  //   {
  //     name: 'lit-less',
  //     transform: (code, id) => {
  //       if (code.includes('extends LitElemen')) {
  //         // compile less & set to style;
  //         return new Promise((res, rej) => {
  //           fs.readFile(path.join(id, '../', './style/entry.less'), (err, data) => {
  //             // console.log('🚀 ~ file: vite.config.ts:16 ~ fs.readFile ~ data');
  //             if (err) {
  //               rej(err);
  //               return;
  //             }
  //             less
  //               .render(data.toString(), {
  //                 javascriptEnabled: true,
  //                 paths: [path.join(id, '../', './style')]
  //               })
  //               .then(val => {
  //                 const css = val.css;
  //                 const lineCode = code.split(/(?:\r\n|\r|\n)/g);
  //                 const index = lineCode.findIndex(v => v.includes('./style/entry.less'));
  //                 lineCode.splice(index, 1, `static styles = css\`${css}\``);
  //                 res(lineCode.join('\n'));
  //               })
  //               .catch(err => {
  //                 rej(err);
  //               });
  //           });
  //         });
  //       }
  //       return code;
  //     }
  //   }
  // ],
  resolve: {
    alias: [
      { find: '@cdk', replacement: '/components/cdk' },
      { find: '@common', replacement: '/components/common' },
      { find: '@decorator', replacement: '/components/decorator' },
      { find: '@mixin', replacement: '/components/mixin' },
      { find: '@service', replacement: '/components/service' },
      { find: '@style', replacement: '/components/style' },
      { find: '@types', replacement: '/components/types' },
      { find: '@overlay', replacement: '/components/overlay' },
      { find: '@animation', replacement: '/components/animation' }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    lib: {
      entry: 'components/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
});
