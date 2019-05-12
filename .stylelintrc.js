module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    './node_modules/prettier-stylelint/config.js'
  ],
  ignoreFiles: [
    'node_modules/**'
  ],
  rules: {
    'indentation': 2,
    'no-descending-specificity': null
  }
}