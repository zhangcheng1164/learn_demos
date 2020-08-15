/**
 * 1. 使用 airbnb-base
 * 2. 使用ts的 recommend
 * 3. 使用 eslint-config-prettier来禁用掉所有与 prettier有冲突的stylistic相关的rule
 * 4. 使用 eslint-plugin-prettier 来将prettier作为eslint的一部分校验format
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    // 没有这个resolver， import的时候不识别ts文件
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-useless-constructor': 'off',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
