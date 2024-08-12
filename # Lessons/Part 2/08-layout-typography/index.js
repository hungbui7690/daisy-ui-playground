/*
  Typography
  - You should use official TailwindCSS Typography plugin. It handles everything and it's fully customizable. daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements.

  ~~ npm install -D @tailwindcss/typography


*/

module.exports = {
  //...
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
