// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka"', 'sans-serif'],
      },

    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    plugins: [require('@tailwindcss/typography')],
};
