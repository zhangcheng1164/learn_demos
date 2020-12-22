/**
 * entry方式： 
 * 1. 我们使用preset-env来做polyfill，它会引入目标环境所缺失的所有特性，但是我们必须手动import 'core-js'
 * 2. @babel/plugin-transform-runtime 将帮助我们将babel的helper方法改为require的方式，而不是每个文件都有一份
 * 我们必须手动安装对core-js和@babel/runtime的依赖（并且不能时dev依赖）
 */
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}