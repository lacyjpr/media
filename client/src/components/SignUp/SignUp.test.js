import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

it('renders without crashing', () => {
  shallow(<SignUp />);
});
