module.exports = {
  extends: [require.resolve('prefer-code-style/lib/stylelint')],
  rules: {
    'color-function-notation': 'modern',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: ['public/**/*.css', 'dist/**/*.css'],
  customSyntax: 'postcss-less',
}
