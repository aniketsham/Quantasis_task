/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter-google)',
          {
            fontFeatureSettings: '"cv11"',
            fontVariationSettings: 'normal',
          },
        ],
        local: [
          'var(--font-inter-local)',
          // {
          //   fontFeatureSettings: '"cv11"',
          //   fontVariationSettings: "normal",
          // },
        ],
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
 
  ],
}

