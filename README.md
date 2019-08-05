# eslint-config-qare

The Qare EsLint rules

## Installation
```
npm install eslint-config-qare eslint eslint-plugin-import eslint-config-airbnb --save-dev
```

## Set up a .eslintrc in your project
```
{
  "extends": "qare",
  "rules" : {
  }
}

```

## Add it to your project's package.json
```
{
  "scripts": {
    "lint": "eslint .",
  }
}
```

## Run the linter
```
npm run lint
```
