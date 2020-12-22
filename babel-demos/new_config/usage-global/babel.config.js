/**
 * usage方式： 
 * 1. 不再使用preset-env来做polyfill，而是使用专门的polyfill provider，本例中使用的是 core-js@3对应的polyfill provider： babel-plugin-polyfill-corejs3
 * 2. 之前的usage 对应 polyfill provider的usage-global方法，代表根据目标环境缺失并且代码中真正使用情况引入, 不再需要手动import 'core-js'
 */

module.exports = {
  presets: [
    '@babel/env',
  ],
  plugins: [
    ['polyfill-corejs3', {
      'method': 'usage-global',
    }],
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}