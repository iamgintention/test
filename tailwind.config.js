/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.tsx'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        /* --PRIMARY COLOR */
        primary: 'var(--primary_color)',
        primary_100: 'var(--primary_color_100)',
        primary_200: 'var(--primary_color_200)',
        primary_300: 'var(--primary_color_300)',
        primary_400: 'var(--primary_color_400)',
        primary_500: 'var(--primary_color_500)',
        primary_600: 'var(--primary_color_600)',
        primary_700: 'var(--primary_color_700)',
        primary_800: 'var(--primary_color_800)',
        primary_900: 'var(--primary_color_900)',
        /* --For dark mode */
        primary_dark_900: 'var(--primary_dark_color_900)',
        primary_dark_800: 'var(--primary_dark_color_800)',
        primary_dark_700: 'var(--primary_dark_color_700)',
        primary_dark_600: 'var(--primary_dark_color_600)',
        primary_dark_500: 'var(--primary_dark_color_500)',
        primary_dark_400: 'var(--primary_dark_color_400)',
        primary_dark_300: 'var(--primary_dark_color_300)',
        primary_dark_200: 'var(--primary_dark_color_200)',
        primary_dark_100: 'var(--primary_dark_color_100)',
        primary_dark_50: 'var( --primary_dark_color_50)',
        /* --SECONDARY COLOR */
        secondary_50: 'var(--secondary_color_50)',
        secondary_100: 'var(--secondary_color_100)',
        secondary_200: 'var(--secondary_color_200)',
        secondary_300: 'var(--secondary_color_300)',
        secondary_400: 'var(--secondary_color_400)',
        secondary_500: 'var(--secondary_color_500)',
        secondary_600: 'var(--secondary_color_600)',
        secondary_700: 'var(--secondary_color_700)',
        secondary_800: 'var(--secondary_color_800)',
        secondary_900: 'var(--secondary_color_900)',
      },
      backgroundImage: {
        primary_cover: 'var(--bg-gradient-overlay), var(--primary-cover)',
        slide_1: 'var(--bg-gradient-overlay), var(--bg-slide-1)',
        slide_2: 'var(--bg-gradient-overlay), var(--bg-slide-2)',
        slide_3: 'var(--bg-gradient-overlay), var(--bg-slide-3)',
        slide_4: 'var(--bg-gradient-overlay), var(--bg-slide-4)',
        slide_5: 'var(--bg-gradient-overlay), var(--bg-slide-5)',
        slide_6: 'var(--bg-gradient-overlay), var(--bg-slide-6)',
      },
      fontFamily: {
        primary_font: 'var(--primary_font)',
      },
      borderRadius: {
        none: '0',
        sm: '1rem',
        md: '1.2rem',
        lg: '2rem',
        large: '3rm',
      },
    },
    typography: (theme) => ({}),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  
};
