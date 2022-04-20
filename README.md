# [DEPRECATED] eslint-config-qare

The Qare Legacy EsLint rules

Use [the new linter](https://github.com/qare/lint) instead

## Contributing

1. Checkout and pull master

`git checkout master && git pull origin master`

2. Create and checkout a branch

`git branch -b your-branch`

3. Do your changes
4. **Bump the package version in package.json** ([following semver](https://semver.org/))
5. Push your changes

`git push origin your-branch`

6. Open a Pull Request towards master on github
7. On approval: **SQASH AND MERGE** so that one commit is one version
8. Create a new tag on master corresponding to the package version (ie. `v1.2.8`)

## Installation in a project

### Install this package
```
yarn add -D eslint-config-qare@git+https://github.com/qare/eslint-config.git
```

### Install all peer dependencies
```
yarn add -D eslint@^6.1.0
yarn add -D eslint-plugin-flowtype@^4.3.0
yarn add -D eslint-plugin-import@^2.18.2
yarn add -D eslint-plugin-no-only-tests@^2.3.1
yarn add -D eslint-plugin-jsx-a11y@^6.2.3
yarn add -D eslint-plugin-react@^7.14.3
yarn add -D eslint-plugin-react-hooks@^1.7.0
```

### Set up a .eslintrc.js file at root level
```
module.exports = {
  extends: [ 'qare' ],
};

```

### Add it to your project's package.json
```
{
  "scripts": {
    "lint": "eslint .",
  }
}
```

### Run the linter
```
yarn lint
```
