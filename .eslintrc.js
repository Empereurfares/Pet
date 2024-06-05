module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // Disable specific rules
    'semi': 'off', // Disable semicolon rule
    'space-before-function-paren': 'off', // Disable space before function parentheses rule
    'multiline-ternary': 'off', // Disable multiline ternary rule

    // You can adjust more rules here
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'indent': ['error', 2], // Ensure consistent indentation
  },
};
