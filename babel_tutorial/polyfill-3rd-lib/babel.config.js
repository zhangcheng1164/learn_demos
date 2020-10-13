module.exports = {
  presets: [[
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
      modules: 'commonjs'
    }
  ]],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ]
}
