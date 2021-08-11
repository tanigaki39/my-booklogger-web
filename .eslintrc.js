module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
  },
}
