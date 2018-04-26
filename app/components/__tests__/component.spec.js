import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

import Intro from '../Intro';

test( 'Intro view renders correctly', () => {
  const tree = renderer.create(
    <Intro />
  ).toJSON()

  expect( tree ).toMatchSnapshot();
} );

test( 'Intro view renders with invalid login credentials', () => {
  const tree = renderer.create(
    <Intro
      error="The email and password you entered did not match our records. Please try again!"
    />
  ).toJSON()

  expect( tree ).toMatchSnapshot();
} );
