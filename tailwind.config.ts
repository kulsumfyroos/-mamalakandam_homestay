import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '620px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      gridTemplateColumns: {
        'max2': 'repeat(2, max-content)',
        'max3': 'repeat(3, max-content)',
        'max4': 'repeat(4, max-content)',
        'a': 'repeat(2, 350px)',
        'b': '460px 340px',
        'c': '620px 1fr',
      },
      colors: {
        'primary-1': 'hsl(84, 36%, 42%)',
        'primary-2': 'rgb(78, 98, 60)',
        'primary-3': 'rgb(23, 204, 87)',
        'whatsapp': 'rgb(25, 114, 92)',
        'secondary': 'hsl(34, 44%, 65%)',
        'secondary-muted': 'hsl(34, 44%, 65%, 0.3)',
        'background': 'hsl(0, 0%, 95%)',
        'foreground': 'hsl(222.2, 47.4%, 11.2%)',
        'container': 'hsl(0, 0%, 10%)',
        'container-foreground': 'hsl(0, 0%, 70%)',
        'muted': 'hsl(210, 40%, 96.1%)',
        'muted-foreground': 'rgba(0, 0, 0, 0.6)',
        'error': 'rgb(196, 28, 28)',
        'error-soft': 'rgb(252, 228, 228, .3)',
        'success': 'rgb(31, 122, 31)',
        'success-soft': 'rgba(227, 251, 227, .3)',
        'info': 'rgb(11, 107, 203)',
        'info-soft': 'rgb(227, 239, 251, .3)',
        'alert': 'rgb(154, 91, 19)',
        'alert-soft': 'rgb(253, 240, 225, .3)',
        'transparent': 'hsla(0, 0%, 100%, .2)',
        'transparent-75': 'hsla(0, 0%, 100%, .75)', // white
      },
      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight: {
        'extra-tight': '1.2',
        'extra-loose': '2.5',
      },
      keyframes: {
        ripples: {
          '0%': { width: '0', height: '0', opacity: '0.5' },
          '100%': { width: '500px', height: '500px', opacity: '0'},
        }
      },
      animation: {
        ripples: 'ripples 0.6s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;