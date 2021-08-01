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
        '90': '90',
        '100': '100',
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        19: '4.75rem',
        22: '5.5rem',
        26: '6.5rem',
        38: '9.5rem',
        50: '12.5rem',
      },
      width: {
        130: '32.5rem',
        140: '35rem',
      },
      minWidth: {
        130: '32.5rem',
        140: '35rem',
      },
      minHeight: {
        150: '37.5rem',
      },
      maxWidth: {
        screen: '1400px',
      },
      flex: {
        half: '1 1 50%',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
