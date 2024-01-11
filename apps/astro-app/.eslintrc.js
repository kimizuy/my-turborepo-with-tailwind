module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    // FIXME: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received an instance of Array
    // "@repo/eslint-config/react.js",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
