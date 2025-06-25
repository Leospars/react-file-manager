// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*',
      './src/constants/**',
      './src/contexts/**',
      './src/hooks/**',
      './src/utils/**',
      './src/validators/**',
      './src/index.js'],
  },
]);
