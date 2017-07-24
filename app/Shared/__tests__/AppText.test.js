import React from 'react';
import AppText from '../AppText';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <AppText title='test' onPress={jest.fn()} />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
