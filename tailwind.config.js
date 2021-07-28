module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'var(--primary)',
      'gray-primary': 'var(--gray-primary)',
      'blue-primary': 'var(--blue-primary)',
      'gray-body': 'var(--gray-body)',
      'gray-label': 'var(--gray-label)',
      dark: 'var(--dark)',
      'dark-secondary': 'var(--dark-secondary)',
      'dark-text': 'var(--dark-text)',
      'dark-body': 'var(--dark-body)',
      'primary-light': 'var(--primary-light)',
      'gray-bg': 'var(--gray-bg)',
      'gray-placeholder': 'var(--gray-placeholder)',
      error: 'var(--error)',
      success: 'var(--success)',
      white: '#fff',
      black: '#000',
    },
    extend: {
      boxShadow: {
        'light-button-shadow': '0px 0px 16px rgba(255, 217, 17, 0.35)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
      spacing: {
        13: '3.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
