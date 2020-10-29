import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'builtin-modules';
// import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/mock-api.common.min.js',
      format: 'cjs',
      // exports主要与 esm中的default导出如何在cjs/iife中实现有关，另外不要混用default和 命名导出 Mixing named and default exports
      // 当前例子中没有使用default导出，所以这个设置无关紧要
      exports: 'auto',
    },
  ],
  // 这里的builtins指的是node.js环境中诸如http url这种node环境特有的依赖包，将它们设为external可以让rollup不抛出 unresolved 错误
  // 注意和打包browser代码时的那个builtins区分开，那个是在浏览器环境中polyfill node环境中的这些api
  external: builtins,
  plugins: [
    /*
    axios的package.json中browser属性是一个对象
    "browser": {
      "./lib/adapters/http.js": "./lib/adapters/xhr.js"
    },
    它的含义就是在打包browser版本时，应该使用xhr.js代替http.js，xhr.js 使用XMLHttpRequest，而http.js则是使用node.js中的http/https
    下面这个browser就代表是否让rollup做这个替换，在打cjs时使用默认值false，在打iife时，使用true    
    */
    nodeResolve({ browser: false }),
    /*
    对于在try catch中require的代码，rollup默认会出错，使用ignore来解决
    https://github.com/rollup/rollup-plugin-commonjs/issues/355
    */
    commonjs({ignore: ['debug'],}),
    babel({ babelHelpers: 'runtime', include: [/src/, /axios/], }),
    json(),
    // terser(),
  ]
};