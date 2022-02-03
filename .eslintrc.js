module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    // useJSXTextNode: true,
    // project: "./tsconfig.json",
    // project: "./tsconfig.eslint.json",
    // project: [path.resolve(__dirname, "tsconfig.eslint.json")],
  },

  /*  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },*/

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    // I suggest you add those two rules:
    // "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    // If you don't like a rule added by @typescript-eslint/recommended
    // "prefer-const": "off",

    // semi: "off",
    // "@typescript-eslint/semi": ["warn"],
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    curly: ["error", "all"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],

    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "no-unused-expressions": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "func-names": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "no-prototype-builtins": 0,
    "prefer-destructuring": 0,
    "no-else-return": 0,
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    // "@typescript-eslint/no-explicit-any": 0,
    /* "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "none",
        argsIgnorePattern: "^(_|doc$|req$|res$|next$|props$|params$|opts$|e$)",
      },
    ], */
    "@typescript-eslint/no-use-before-define": 0,
    // "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-children-prop": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // 'react-hooks/rules-of-hooks': 0,
  },
}
