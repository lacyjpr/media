import React from 'react';
import { shallow } from 'enzyme';

import SlateViewer from './SlateViewer';

describe('<SlateViewer />', () => {
  it('renders without crashing', () => {
    shallow(<SlateViewer />);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<SlateViewer />);
    expect(wrapper).toMatchSnapshot();
  });
});
