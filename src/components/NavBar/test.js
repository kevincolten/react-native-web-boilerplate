import React from 'react';
import Komponent from './index.web.js';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Komponent />).toJSON();
  expect(rendered).toBeTruthy();
});
