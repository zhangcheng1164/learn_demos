const plugins = [
  '@babel/transform-runtime',
  [
    'polyfill-corejs3',
    {
      method: 'usage-global',
    },
  ],
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
]

if (process.env.NODE_ENV === 'production') {
  // 通过使用babel 编译ts，充分利用babel的 ecosystem, 这里再production阶段删除所有的console.log
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}

module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript'],
  plugins,
}
