module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'flowtype',
    'no-only-tests',
  ],
  rules: {
    'consistent-return': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/require-parameter-type': 1,
    'flowtype/require-valid-file-annotation': [ 2, 'always' ],
    'flowtype/space-after-type-colon': [ 1, 'always' ],
    'flowtype/space-before-type-colon': [ 1, 'never' ],
    'flowtype/type-id-match': [ 1, '^([A-Z][a-z0-9]+)+Type$' ],
    'flowtype/use-flow-type': 1,
    'guard-for-in': 0,
    'import/prefer-default-export': 0,
    'new-cap': 0,
    'no-await-in-loop': 0,
    'no-only-tests/no-only-tests': 'error',
    'no-param-reassign': [ 1, { 'props': false } ],
    'no-restricted-syntax': 0,
    'no-unused-vars': [ 1, { 'args': 'none' } ],
  },
  globals: {
    describe: true,
    it: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
};
