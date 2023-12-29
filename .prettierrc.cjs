module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
        // デフォルト設定
        // printWidth: 80
        // tabWidth: 2,
        // useTabs: false,
        // semi: ture,
        // singleQuote: false,
        // quoteProps: "as-needed",
        // jsxSingleQuote: false,
        // trailingComma: "es5",
        // bracketSpacing: true,
        // arrowParens: "always",
        // rangeStart: 0,
        // rangeEnd: Infinity,
        // jsxBracketSameLine: false,
        // requirePragma: false,
        // insertPragma: false,
        // proseWrap: "preserve",
        // htmlWhitespaceSensitivity: "css",
        // vueIndentScriptAndStyle: false,
        // endOfLine: "lf",
        // embeddedLanguageFormatting: "auto"

        // 設定
        useTabs: true,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        arrowParens: "always",
        rangeStart: 0,
        rangeEnd: Infinity,
        jsxBracketSameLine: false,
        requirePragma: false,
        insertPragma: false,
        proseWrap: "preserve",
        htmlWhitespaceSensitivity: "css",
        vueIndentScriptAndStyle: false,
        // endOfLine: "lf",
        embeddedLanguageFormatting: "auto",
      },
    },
  ],
};
