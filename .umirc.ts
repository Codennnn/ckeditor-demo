export default {
  outputPath: process.env.BUILD_ENV === 'prod' ? 'dist-prod' : 'dist-test',

  hash: true,

  fastRefresh: true,

  conventionRoutes: {
    exclude: [/\/components\//, /\.(test|helper)\.(j|t)sx?$/],
  },

  theme: {
    '@primary-color': '#0077fa',
    '@success-color': '#3bb346',
    '@warning-color': '#fc8800',
    '@error-color': '#f93920',
  },

  plugins: [
    require.resolve('@umijs/plugins/dist/antd'),
    require.resolve('@umijs/plugins/dist/tailwindcss'),
  ],

  define: {
    'process.env.BUILD_ENV': process.env.BUILD_ENV,
  },

  tailwindcss: {},

  antd: {},
}
