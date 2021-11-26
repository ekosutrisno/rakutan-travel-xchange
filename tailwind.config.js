module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      'blue-1': '#002D63',
      'blue-2': '#00A1E5',
      'black-1': '#000000',
      'black-2': '#333333',
      'light-grey': '#F5F5F5',
      'white': '#FFFFFF',
      'danger': '#D80000',
      'warning': '#EE8F13',
      'success': '#019501',
      'danger-background': '#FFE8E8',
      'warning-background': '#FFFBE8',
      'success-background': '#ECFBEC',
      'placeholder': '#757575',
      'line': '#DDDDDD'
    },
    extend: {
      fontFamily:{
        mulish: ['Mulish', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}