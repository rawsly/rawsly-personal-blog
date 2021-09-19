module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f56565',
          dark: '#ed4a4a',
          light: '#ffb1c4',
        },
        secondary: {
          DEFAULT: '#f9f9f9',
          light: '#fff',
          dark: '#f1f1f1'
        },
        warning: {
          DEFAULT: '#e76e1e',
          light: '#e37b36'
        },
        danger: {
          DEFAULT: '#e93939',
          light: '#e55252'
        },
        success: {
          DEFAULT: '#21ba45',
          light: '#34ba53',
        },
        white: '#fff',
        black: {
          DEFAULT: '#000',
          '100': '#111',
          '200': '#222',
          '300': '#333',
        },
        default: {
          DEFAULT: '#545454',
          light: '#747474',
        },
        title: '#343434',
        tag: {
          DEFAULT: '#e4e4e4',
        },
        divider: '#e9e9e9',
      },
      fill: {
        current: 'currentColor'
      },
      width: {
        container: '1200px',
        'featured-img': '14rem'
      },
      height: {
        'featured-img': '12.5rem',
        sidebar: '62rem'
      },
      flex: {
        '2': '2 2 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
