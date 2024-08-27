import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/out',
    '**/dist',
    '**/*.d.ts',
  ],

  files: [
    'src/**/*.ts',
  ],

  languageOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
  },

  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  // Overwrite certain rules to your preference
  rules: {
    'no-console': ['error', {
      allow: ['info', 'warn', 'trace', 'error', 'group', 'groupEnd'],
    }],
    'curly': ['error', 'all'],
    'node/prefer-global/process': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'no-throw-literal': 'warn',

    'style/comma-dangle': ['warn', 'always-multiline'],
    'style/arrow-parens': ['warn', 'always'],
    'style/semi': ['warn', 'always'],
    'style/no-tabs': ['warn', {
      allowIndentationTabs: false,
    }],
    'style/indent': ['warn', 2],
    'style/quotes': ['warn', 'double'],
  },
})
