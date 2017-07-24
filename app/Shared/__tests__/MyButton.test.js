import React from 'react';
import MyButton from '../MyButton';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <MyButton title='test' onPress={jest.fn()} />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
