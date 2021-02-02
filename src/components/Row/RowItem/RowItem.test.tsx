import React from "react";
import { shallow } from "enzyme";
import { RowItem } from "./RowItem";


const  testData =  {
  title: "test",
  describe: "test1"
}

describe('<RowItem />', () => {
  let wrapper: any;

  beforeEach(( ) => {
    wrapper = shallow(<RowItem data={testData}/>);
  })

  it('Should have main 2 items', () => {
    expect(wrapper.find('div').children()).toHaveLength(5);
  });

  it('Should have element', () => {
    expect(wrapper.find('div.actionBarStyle')).toHaveLength(1);
  });

  it('Should have Buttons', () => {
    expect(wrapper.find('div.actionBarStyle').children()).toHaveLength(2);
  });
})