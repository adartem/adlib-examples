// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

// ESLint configuration standardisée pour ADARTEM
// Spécifique à adlib-examples : ignore Storybook/config et lint uniquement src + tests

import globals from 'globals';
import prettier from 'eslint-config-prettier';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
  {
    // Fichiers à ignorer complètement
    ignores: [
      'node_modules',
      'dist',
      'build',
      'storybook-static',
      'coverage',
      'tmp-repos',
      'vite.config.ts',
      'eslint.config.js',
      'jest.config.js',
      '.storybook/**',
      'tests/setupTests.ts', // setup Jest → pas besoin de le lint strictement
    ],
  },
  {
    files: ['src/**/*.{ts,tsx,js}', 'tests/**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json', // tsconfig dédié au lint
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // autorise describe, it, expect
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  }, // Intégration avec Prettier
  prettier,
  ...storybook.configs['flat/recommended'],
];
