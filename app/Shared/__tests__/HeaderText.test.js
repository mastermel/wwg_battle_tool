import React from 'react';
import HeaderText from '../HeaderText';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <HeaderText title='test' onPress={jest.fn()} />
  ).toJSON();
  expect(rendered).toBeTruthy();
});
