import React from 'react';
import { shallow } from 'enzyme';

import SlateEditor from './SlateEditor';

describe('<SlateEditor />', () => {
  it('renders without crashing', () => {
    shallow(<SlateEditor />);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<SlateEditor />);
    expect(wrapper).toMatchSnapshot();
  });
});
