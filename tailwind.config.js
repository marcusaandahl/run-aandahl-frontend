module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    // specify other options here
  };