import React from 'react';
import { shallow } from 'enzyme';
import UserHome from './UserHome';

it('renders without crashing', () => {
  shallow(<UserHome />);
});
