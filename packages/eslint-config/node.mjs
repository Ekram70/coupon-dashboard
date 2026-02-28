import base from './base.mjs';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-process-env': 'off',
    },
  },
];
