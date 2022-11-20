module.exports = {
  extends: ['plugin:prettier/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-anonymous-default-export': 'off',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
};
