import React from 'react';
import AppButton from '../AppButton';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <AppButton title='test' onPress={jest.fn()} />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
