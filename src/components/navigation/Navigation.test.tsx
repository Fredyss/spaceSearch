import React from "react";
import { shallow } from "enzyme";
import { Navigation } from "./Navigation";
import { NavigationItems } from "./NavigationItems/NavigationItems";

describe('<Navigation />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('Should have NavigationItems', () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it('Should have input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});