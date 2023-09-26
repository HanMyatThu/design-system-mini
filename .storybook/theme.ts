// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'IPTS Design System',
  brandUrl: 'http://localhost:6006/',
  brandImage: '/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#00ACA8',
});