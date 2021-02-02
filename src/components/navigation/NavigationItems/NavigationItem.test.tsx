import React from 'react';
import { shallow } from 'enzyme';
import { NavigationItems } from './NavigationItems';
import { Link } from 'react-router-dom';

describe('<NavigationItem />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('Should have Navigation Items in Mobile Menu', () => {
    expect(wrapper.find('Menu').children()).toHaveLength(0);
  });

  it('Should have Navigation Links', () => {
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  it('Should have Navigation Links', () => {
    expect(wrapper.contains(<Link to="/home">Home</Link>)).toEqual;
  });
});
