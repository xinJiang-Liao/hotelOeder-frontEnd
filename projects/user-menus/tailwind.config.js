module.exports = {
  purge: [
    "./projects/user-menus/src/**/*.{html,ts}",
    "./projects/lib-component/src/**/*.{html,ts}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animate__pulse: ["hover"],
    },
  },
  plugins: [],
};
