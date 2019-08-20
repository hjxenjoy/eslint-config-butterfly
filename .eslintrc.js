const prettierrc = {
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["*.css", "*.less", "*.scss"],
      "options": {
        "singleQuote": false,
      },
    },
  ],
}

module.exports = {
  "extends": [
    "airbnb-base",
    "prettier",
  ],
  "plugins": [
    "prettier",
  ],
  "parser": "babel-eslint",
  "rules": {
    "no-console": 0,
    "prettier/prettier": [
      "error",
      prettierrc
    ],
  },
  "globals": {
    "window": true,
    "document": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
  },
}