module.exports = {
  content: ["./**/*.liquid"],
  safelist: ["mt-16", "mb-12"],
  theme: {
    extend: {
      fontFamily: {
        // Global default remains unchanged
        sans: ['"Roboto Condensed"', 'system-ui', 'sans-serif'],
        // Page titles originally used Oswald; now we want Satoshi for titles too.
        satoshi: ['"Satoshi"', 'sans-serif']
      },
    },
  },
  plugins: [],
};
