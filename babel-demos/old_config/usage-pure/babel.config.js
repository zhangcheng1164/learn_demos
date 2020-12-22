/**
 * ponyfill方式（不修改全局变量来做polyfill就是ponyfill)： 
 * 1. @babel/plugin-transform-runtime 将帮助我们对真正使用的特性做ponyfill，但是注意@babel/plugin-transform-runtime 并不遵守我们对目标环境的规定
 * 及时我们设置像node 12这种很高级的环境，依然做ponyfill
 * 2. @babel/plugin-transform-runtime 将帮助我们将babel的helper方法改为require的方式，而不是每个文件都有一份
 * 我们必须手动安装对core-js和@babel/runtime的依赖（并且不能时dev依赖）
 * 
 * 注意！！！！：
 * 使用@babel/plugin-transform-runtime帮助我们做ponyfill有一个致命的问题，就是 @babel/plugin-transform-runtime 不遵守 我们对与目标环境的
 * 设定
 */

module.exports = {
  presets: [
    [
      '@babel/env',
    ]
  ],
  plugins: [
    // 不遵守对目标环境的规定，本例子中就是不遵守 .browserslistrc中的规定
    ['@babel/plugin-transform-runtime', {
      corejs: 3
    }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}