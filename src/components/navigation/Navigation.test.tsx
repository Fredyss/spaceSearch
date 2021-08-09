import React from "react";
import { shallow } from "enzyme";
import { Navigation } from "./Navigation";


describe('<Navigation />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });
  
  it('Should have input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});