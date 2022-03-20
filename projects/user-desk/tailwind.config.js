module.exports = {
  purge: ['./projects/user-desk/src/**/*.{html,ts}','./projects/lib-component/src/**/*.{html,ts}'],
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
