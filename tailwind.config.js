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
      colors: {
        yellow: '#FFB80E',
        red: '#DF2026',
        darkRed: '#611220',
      },
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
        80: '20rem',
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
      inset: {
        processedPopup : 'calc( ( 100vh - 432px ) / 2 )',
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
