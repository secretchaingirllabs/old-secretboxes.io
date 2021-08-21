const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.mdx',
  ],
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
      'gray-bg': 'var(--gray-bg)',
      'primary-light': 'var(--primary-light)',
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
        display: ['var(--font-display)', ...fontFamily.serif],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      spacing: {
        13: '3.25rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            code: { color: theme('colors.blue.400') },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            h1: {
              fontSize: '48px',
              fontWeight: '400',
              fontFamily: theme('fontFamily.display').join(', '),
              marginBottom: 0,
            },
            h2: {
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: 0,
              fontFamily: theme('fontFamily.body').join(', '),
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            code: { color: theme('colors.blue.400') },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            h1: {
              fontSize: '48px',
              fontWeight: '400',
              fontFamily: theme('fontFamily.display').join(', '),
              marginBottom: 0,
              marginTop: '30px',
            },
            h2: {
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: 0,
              marginTop: '30px',
              fontFamily: theme('fontFamily.body').join(', '),
            },
            p: { marginBottom: '15px' },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
