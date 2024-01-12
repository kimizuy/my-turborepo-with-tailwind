module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "@repo/eslint-config/react.js",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".astro"],
      },
    },
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "react/jsx-key": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
