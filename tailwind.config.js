module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screen: {
      sm: '513px',
      md: '817px',
      lg: '1024px',
      xl: '1440px',
    },
    borderRadius: {
      DEFAULT: '8px',
      full: '9999px',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
