module.exports = {
  root: true,
  plugins: [
    'simple-import-sort',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  ignorePatterns: [
    'build',
    '.react-router',
    // shadcn/ui vendors these files verbatim; reformatting them to match our
    // house style just creates diff noise on the next `shadcn add`.
    'app/components/ui/**',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    // Deprecated for function components in favor of default parameter values.
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/imports': 'error',
  },
  overrides: [
    {
      files: ['*.config.ts', 'react-router.config.ts', 'app/routes.ts'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
