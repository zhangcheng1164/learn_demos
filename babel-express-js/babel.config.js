module.exports = {
  presets: ['@babel/env'],
  plugins: [
    '@babel/transform-runtime',
    [
      'polyfill-corejs3',
      {
        method: 'usage-global',
      },
    ],
  ],
}
