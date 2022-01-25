module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      screens: {
      },
      extend: {}
    },
    variants: {
      backgroundColor: ['active'],
      extend: {},
    },
    plugins: []
    // specify other options here
  };