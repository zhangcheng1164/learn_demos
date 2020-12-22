/**
 * ponyfill方式（不修改全局变量来做polyfill就是ponyfill)： 
 * 之前使用@babel/plugin-transform-runtime做ponyfill遇到了 不遵守对目标环境规定的问题，导致引入很多不必要的特性
 * 现在使用polyfill provider解决
 * 配置很简单，ponyfill对应着 provider的 usage-pure 
 */

module.exports = {
  presets: [
    '@babel/env',
  ],
  plugins: [
    '@babel/plugin-transform-runtime', 
    ['polyfill-corejs3', {
      'method': 'usage-pure',
    }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}