module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: process.env.TARGET === 'esm' ? false : 'auto',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'polyfill-corejs3',
      {
        method: 'usage-pure',
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}
