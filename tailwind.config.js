/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.purple[500]'),
            '--tw-prose-links-hover': theme('colors.purple[600]'),

            '--tw-prose-invert-body': theme('colors.purple[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-links-hover': theme('colors.white'),

            // Base
            color: 'var(--tw-prose-body)',
            lineHeight: theme('lineHeight.7'),

            p: {
              marginTop: theme('spacing.7'),
              marginBottom: theme('spacing.7'),
            },

            // Headings
            'h1, h2, h3': {
              color: 'var(--tw-prose-headings)',
              fontWeight: theme('fontWeight.bold'),
            },
            h1: {
              fontSize: '4rem',
              lineHeight: theme('lineHeight.7'),
              marginBottom: theme('spacing.1'),
            },
            h2: {
              fontSize: theme('fontSize.2xl')[0],
              lineHeight: theme('lineHeight.7'),
              marginBottom: theme('spacing.1'),
            },
            h3: {
              fontSize: theme('fontSize.lg')[0],
              lineHeight: theme('lineHeight.7'),
              marginBottom: theme('spacing.6'),
            },
            ':is(h2, h3) + *': {
              marginTop: 0,
            },
            // Inline elements
            a: {
              color: 'var(--tw-prose-links)',
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'underline',
              textDecorationColor: 'var(--tw-prose-underline)',
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: theme('transitionDuration.150'),
              transitionTimingFunction: theme('transitionTimingFunction.in-out'),
            },
            'a:hover': {
              color: 'var(--tw-prose-links-hover)',
              textDecorationColor: 'var(--tw-prose-underline-hover)',
            },
          },
        },
      }),
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        gray: {
          900: '#050505',
          800: '#1F1F1F',
          700: '#2D2D2D',
          600: '#3A3A3A',
          500: '#757575',
          400: '#E9E9E9',
          300: '#F4F4F4',
        },
        purple: '#A445ED',
        red: '#FF5252',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
        mono: ['var(--font-inconsolata)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
