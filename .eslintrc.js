module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    'sourceType': 'module'
  },
  rules: {
    'indent': [2, 2],
    'no-console': 0,
    'no-unused-vars': 2,
  }
}