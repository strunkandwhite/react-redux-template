module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['a'],
      },
    ],
  },
  settings: {
    // linter reads any webpack import aliases
    'import/resolver': {
      webpack: {
        config: './config/webpack.common.js',
      },
    },
    react: {
      version: '16.4',
    },
  },
}
