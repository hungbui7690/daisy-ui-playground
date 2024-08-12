/*
  Setup
  1. Tailwind
    -> npm install -D tailwindcss
    -> npx tailwindcss init

  2. Daisy UI
    -> npm i -D daisyui@latest

  3. tailwind.config.js
    ->  plugins: [
          require('daisyui'),
        ],

  4. create input.css
    -> add directives

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

  5. npx tailwindcss -i ./input.css -o ./output.css --watch

  6. index.html 
    -> link to output.css


*/
