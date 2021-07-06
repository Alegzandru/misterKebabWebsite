module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '512px',
      md: '816px',
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
      width: {
        18: '4.5rem',
      },
      maxWidth: {
        screen: '1400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
