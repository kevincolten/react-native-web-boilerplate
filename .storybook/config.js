import { configure } from '@storybook/react';

const req = require.context('../src', true, /story\.\web\.js$/)
const loadStories = () =>  eq.keys().forEach(filename => req(filename));
configure(loadStories, module);
