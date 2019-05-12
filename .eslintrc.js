module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module'
  },
  rules: {
    'prettier/prettier': 2,
    'no-console': 0,
    'no-unused-vars': 2,
  }
}
