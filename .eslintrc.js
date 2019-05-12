module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module'
  },
  rules: {
    'indent': [2, 2],
    'no-console': 0,
    'no-unused-vars': 2,
  }
}
