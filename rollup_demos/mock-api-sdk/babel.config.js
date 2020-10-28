const modules = process.env.MODULES ? 'cjs' : false

module.exports = {
  presets: [[
    '@babel/env',
    {
      modules,
    }
  ]],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      }
    ]
  ]
}