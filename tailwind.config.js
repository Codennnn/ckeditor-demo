const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-scoped-groups')({
      groups: ['one', 'two'],
    }),
  ],

  theme: {
    extend: {
      width: {
        aside: 'var(--aside-width)',
      },
      minWidth: {
        content: 'var(--min-content-width)',
      },
      maxWidth: {
        content: 'var(--max-content-width)',
      },
      height: {
        header: 'var(--header-height)',
        'lo-gutter': 'var(--layout-gutter)',
      },
      padding: {
        header: 'var(--header-height)',
        aside: 'var(--aside-width)',
        'lo-gutter': 'var(--layout-gutter)',
      },
      margin: {
        'lo-gutter': 'var(--layout-gutter)',
      },
      gap: {
        'lo-gutter': 'var(--layout-gutter)',
      },
      colors: {
        primary: colors.blue,
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        page: 'var(--color-page-bg)',
      },
      backgroundImage: {
        stripe:
          'repeating-linear-gradient(45deg, transparent, transparent 20px, #e5e7eb 20px, #e5e7eb 25px)',
      },
      transitionProperty: {
        outline: 'outline-color',
      },
      aspectRatio: {
        carousel: '980 / 280',
      },
    },
  },

  corePlugins: {
    preflight: false,
  },
}
