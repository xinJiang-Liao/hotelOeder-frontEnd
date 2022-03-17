module.exports = {
  purge: ['./projects/admin/src/**/*.{html,ts}','./projects/lib-component/src/**/*.{html,ts}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-1': '#495867',
      },
      lineHeight: {
        '16': '4rem',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
