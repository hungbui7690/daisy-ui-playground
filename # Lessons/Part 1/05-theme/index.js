/*
  daisyUI themes
  - daisyUI comes with a number of themes, which you can use with no extra effort. Each theme defines a set of colors which will be used on all daisyUI elements. To use a theme, add its name in tailwind.config.js and activate it by adding data-theme attribute to HTML tag:

  -> module.exports = {
      //...
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    }

  -> <html data-theme="cupcake"></html>


***********************************

  - https://daisyui.com/docs/themes/


***********************************

  - There are many themes in Daisy UI:
    <light>
    <dark>
    <cupcake>
    <bumblebee>
    <emerald>
    <corporate>
    <halloween>
    <garden>
    <forest>
    ....
    ....


***********************************

  module.exports = {
    //...
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    },
  }


***********************************

  module.exports = {
    daisyui: {
      themes: ["cupcake", "dark", "cmyk"],
    },
  }

  - You can only include the themes you want in your project. This will reduce the size of your CSS file. In the below example
    + cupcake will be the default theme for light mode
    + dark will be the default theme for dark mode
    + cmyk can be applied on any HTML tag with data-theme='cmyk'


***********************************

  - Disable Theme

    module.exports = {
      //...
      daisyui: {
        themes: false,
      },
    }

  - If you don't want to include any themes and disable all colors, set themes config to an empty array.

    module.exports = {
      //...
      daisyui: {
        themes: [],
      },
    }


***********************************

  - Add data-theme='THEME_NAME' to any element and everything inside will have your theme. You can nest themes and there is no limit! You can force a section of your HTML to only use a specific theme.

    <html data-theme="dark">
      <div data-theme="light">
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div>
    </html>


***********************************

  Custom Theme

    module.exports = {
      //...
      daisyui: {
        themes: [
          {
            mytheme: {
              "primary": "#a991f7",
              "secondary": "#f6d860",
              "accent": "#37cdbe",
              "neutral": "#3d4451",
              "base-100": "#ffffff",
            },
          },
          "dark",
          "cupcake",
        ],
      },
    }


***********************************

  #CSS variables in daisyUI themes

    module.exports = {
      //...
      daisyui: {
        themes: [
          {
            mytheme: {
              "primary": "#a991f7",
              "secondary": "#f6d860",
              "accent": "#37cdbe",
              "neutral": "#3d4451",
              "base-100": "#ffffff",

              "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
              "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
              "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
              "--animation-btn": "0.25s", // duration of animation when you click on button
              "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
              "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
              "--border-btn": "1px", // border width of buttons
              "--tab-border": "1px", // border width of tabs
              "--tab-radius": "0.5rem", // border radius of tabs
            },
          },
        ],
      },
    }


***********************************

  Custom CSS for a daisyUI theme
  - You can apply custom style to a daisyUI themes using CSS:

    [data-theme="mytheme"] .btn {
      border-width: 2px;
      border-color: black;
    }


***********************************

  How to customize an existing theme?
  - In your tailwind.config.js, you can require an existing daisyUI theme and override some colors. In the below example, I require and spread light theme and change its primary and secondary colors:

      module.exports = {
        //...
        daisyui: {
          themes: [
            {
              light: {
                ...require("daisyui/src/theming/themes")["light"],
                primary: "blue",
                secondary: "teal",
              },
            },
          ],
        },
      }


***********************************

  How to add custom styles for a specific theme?
  - You can write custom style for your elements only for a specific theme. In this example, .btn-twitter class only will have this style on light theme.

    module.exports = {
      //...
      daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/theming/themes")["light"],
              ".btn-twitter": {
                "background-color": "#1EA1F1",
                "border-color": "#1EA1F1",
              },
              ".btn-twitter:hover": {
                "background-color": "#1C96E1",
                "border-color": "#1C96E1",
              },
            },
          },
        ],
      },
    }


*/

// How to apply Tailwind's 'dark:' selector for specific themes
// - daisyUI can be configured to use Tailwind's dark: selector in your code. To achieve this, modify your tailwind.config.js file to include the darkMode parameter. Ensure that the dark: selector applies to the daisyUI theme you designate as dark. In the example below, we have 'winter' and 'night' themes. Since 'night' is the dark theme, we configure it as shown:
module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {},
  daisyui: {
    themes: ['winter', 'night'],
  },
  darkMode: ['class', '[data-theme="night"]'],
}
