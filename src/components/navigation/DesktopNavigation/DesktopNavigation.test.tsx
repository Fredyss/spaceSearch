import React from 'react';
import { shallow } from 'enzyme';
import { DesktopNavigation } from './DesktopNavigation';

describe('<NavigationItem />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<DesktopNavigation />);
  });

  it('Should have Navigation Items in Mobile Menu', () => {
    expect(wrapper.find('Menu').children()).toHaveLength(0);
  });

  it('Should have Navigation Links', () => {
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });
});
