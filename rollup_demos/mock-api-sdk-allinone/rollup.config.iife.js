import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const builtins = require("rollup-plugin-node-builtins");
import globals from 'rollup-plugin-node-globals';
import babel from '@rollup/plugin-babel';
// import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/mock-api.browser.min.js',
      // node环境可以使用cjs和esm版本,所以这里只打iife
      format: 'iife',
      // exports主要与 esm中的default导出如何在cjs中实现有关，另外不要混用default和 命名导出 Mixing named and default exports
      // 当前例子中没有使用default导出，所以这个设置无关紧要
      exports: 'auto',
      name: 'mockApi',
    },
  ],
  plugins: [
    // browser为true，会读取依赖的package.json，根据browser属性进行文件替换，对于axios，就是会使用./lib/adapters/xhr.js替换./lib/adapters/http.js
    // 在浏览器中xhr.js 会使用XMLHttpRequest
    nodeResolve({ browser: true }),
    commonjs(),
    // rollup-babel默认不处理node_modules目录，对第三方依赖想做polyfill，可以如下这样
    babel({ babelHelpers: 'runtime', include: [/src/, /axios/], }),
    /*
      builtins是对node环境中注入 url 这个require依赖的polyfill
      globals是对 process这种全局变量的polyfill
    */
    builtins(),
    globals(),
    json(),
    // terser(),
  ]
};