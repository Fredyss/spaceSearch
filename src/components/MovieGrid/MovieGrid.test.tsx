import React from 'react';
import { shallow } from 'enzyme';
import { MovieGrid } from './MovieGrid';

describe('MovieGrid component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<MovieGrid data={[]} />);
  });

  it('Should have length', () => {
    expect(wrapper).toHaveLength(1);
  });
});
