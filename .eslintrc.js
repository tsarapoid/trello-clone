module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    "react-app",
    // "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  // parser: "@typescript-eslint/parser",
  /*  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },*/
  plugins: ["react", "@typescript-eslint", "prettier"],

  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
}
