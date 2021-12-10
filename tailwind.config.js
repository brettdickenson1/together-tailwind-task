module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Space Grotesk'],
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryDarkBlue: "#1B263A",
        primaryLightBlue: "#134AE9",
      },
      fontSize: {
        'text-2xl': '1.5rem',
        'text-3xl': '1.875rem',
        'text-4xl': '2.25rem',
        'text-5xl': '3rem',
        'text-7xl': '4.25rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underlineBlue': {
                'text-decoration-color': '#134ae9',
                'border-bottom': '1px solid #134ae9',
                'padding-bottom': '3px',
                'max-width': 'fit-content',
            },
        }
        addUtilities(extendUnderline)
    }
],
}
