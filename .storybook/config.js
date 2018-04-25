import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.web\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
