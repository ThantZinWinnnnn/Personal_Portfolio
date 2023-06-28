/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        rubik: ['"Rubik"', "sans-serif"],
      },
      // keyframes:{
      //   wave:{
      //     '0%':{transform:rotate(0.0)},
      //     '15%':{transform:rotate(14.0)},
      //     '30%':{transform:rotate(-8.0)},
      //     '40%':{transform:rotate(14.0)},
      //     '50%':{transform:rotate(-4.0)},
      //     '60%':{transform:rotate(10.0)},
      //     '70%':{transform:rotate(0.0)},
      //     '100%':{transform:rotate(0.0)},
      //   }
      // },
      // animation:{
      //   wave:'wave 1.5s infinite'      }
    },
  },
  plugins: [],
}
