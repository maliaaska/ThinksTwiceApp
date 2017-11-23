import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';

//react-test-render

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();


  // expect(wrapper.find('h1').text()).toBe("ThinkTwice");
  // const renderer = new ReactShallowRenderer;
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();u
});