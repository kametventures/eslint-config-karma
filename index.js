module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'flowtype',
    'flow-vars',
    'no-only-tests',
  ],
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'flowtype/require-parameter-type': 1,
    'flowtype/space-after-type-colon': [
      1,
      'always'
    ],
    'flowtype/space-before-type-colon': [
      1,
      'never'
    ],
    'flowtype/type-id-match': [
      1,
      '^([A-Z][a-z0-9]+)+Type$'
    ],
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,
    'guard-for-in': 0,
    'import/prefer-default-export': 0,
    'new-cap': 0,
    'no-await-in-loop': 0,
    'no-param-reassign': [
      1,
      {
        'props': false
      }
    ],
    'no-unused-vars': [
      1,
      {
        'args': 'none'
      }
    ],
    'no-restricted-syntax': 0,
    'consistent-return': 0
  },
  globals: {
    describe: true,
    it: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
};
