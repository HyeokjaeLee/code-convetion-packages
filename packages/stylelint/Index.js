module.exports = {
  extends: ["stylelint-config-recommended-scss", ...["./rules/base.js"].map(require.resolve)],
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
};
