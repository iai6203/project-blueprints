/**
 * @type {
 *   import("prettier").Config &
 *   import("@trivago/prettier-plugin-sort-imports").PrettierConfig
 * }
 */
const config = {
  tabWidth: 2,
  trailingComma: "all",
  semi: false,
  singleQuote: true,

  "importOrder": [
    "^@mui/material/(?!styles)",

    "^@app(.*)$",
    "^@pages(.*)$",
    "^@components(.*)$",
    "^@hooks(.*)$",
    "^@styles/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,

  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
}

module.exports = config
