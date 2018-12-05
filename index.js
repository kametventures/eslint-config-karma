module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'flowtype',
    'flow-vars'
  ],
  rules: {
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
    'new-cap': 0,
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
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
};
