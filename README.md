# eslint-config-karma

The Karma EsLint rules

## Installation
```
npm install eslint-config-karma eslint eslint-plugin-import eslint-config-airbnb --save-dev
```

## Set up a .eslintrc in your project
```
{
  "extends": "karma",
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
