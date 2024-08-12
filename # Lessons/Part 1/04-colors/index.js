/*
  Colors

*************************

  Introduction
  - daisyUI is fully themeable and colorable, So instead of using constant color utility classes like:
      <bg-green-500>
      <bg-orange-600>
      <bg-blue-700>
      ...

  - It's suggested to use semantic color utility classes like:
      <bg-primary>
      <bg-secondary>
      <bg-accent>
      ...

  - Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.

  - https://daisyui.com/docs/colors/


*********************************
  
  Color List
  - All of these will have -content postfix -> <secondary-content>, <accent-content>

      <primary> 
      <primary-content>

      <secondary>
      <accent>
      <neutral>
      <base-100>
      <base-200>
      <base-300>
      <base-content>
      <info>
      <success>
      <warning>
      <error>


*********************************

  How To Use

    <button class="btn btn-primary">Button</button>
    <input type="checkbox" class="checkbox checkbox-secondary" />


*********************************

  - You can also use color names in utility classes just like Tailwind's original color names. These are utility classes that can be used with a color name:
      bg-{COLOR_NAME}
      to-{COLOR_NAME}
      via-{COLOR_NAME}
      from-{COLOR_NAME}
      text-{COLOR_NAME}
      ring-{COLOR_NAME}
      fill-{COLOR_NAME}
      caret-{COLOR_NAME}
      stroke-{COLOR_NAME}
      border-{COLOR_NAME}
      divide-{COLOR_NAME}
      accent-{COLOR_NAME}
      shadow-{COLOR_NAME}
      outline-{COLOR_NAME}
      decoration-{COLOR_NAME}
      placeholder-{COLOR_NAME}
      ring-offset-{COLOR_NAME}

  -> <bg-primary>, <border-secondary>


*/
