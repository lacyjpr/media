import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

// Test fetch credit: https://gist.github.com/alfonsomunozpomer/de992a9710724eb248be3842029801c8
const DELAY_MS = 1000;

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

fetchMock.get('*', JSON.stringify({ Name: 'Rick' }));

it('fetches in componentDidMount', async () => {
  const wrapper = shallow(<App />);

  await wrapper.instance().componentDidMount();
  await sleep(DELAY_MS);

  wrapper.update();
  expect(wrapper.state('data')).toHaveProperty('Name', 'Rick');
});
