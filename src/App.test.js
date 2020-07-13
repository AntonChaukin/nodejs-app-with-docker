import React from 'react';
import { render as reactrender} from '@testing-library/react';
import {mount, shallow, render} from 'enzyme';
import App from './App';

it('renders learn react link', () => {
  const {getByText} = reactrender(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
it.skip("renders correctly with no error message", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});
it("renders without crashing", () => {
  shallow(<App />);
});
it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Hi there!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
