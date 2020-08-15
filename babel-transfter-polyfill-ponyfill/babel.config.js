/**
 * https://github.com/babel/babel-polyfills/blob/main/docs/migration.md
 * https://github.com/babel/babel-polyfills#history-and-motivation
 * https://www.jiangruitao.com/babel/quick-start/
 */
module.exports = {
  presets: ['@babel/env'],
  plugins: [
    '@babel/transform-runtime',
    ['polyfill-corejs3', {
      method: 'usage-pure',
    }]
  ]
}