// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),   // Tailwind CSS
    autoprefixer(),  // Autoprefixer for cross-browser support
  ],
};
