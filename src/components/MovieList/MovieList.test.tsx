import React from "react";
import { shallow } from "enzyme";
import { MovieList } from "./MovieList";
import { List } from "@material-ui/core";


const  testData =  [
  { title: "test",
  describe: "test1"}
]



describe('<MovieList />', () => {
  let wrapper: any;

  beforeEach(( ) => {
    wrapper = shallow(<MovieList data={testData} movieHandler={() =>{}}/>);
  })

  it('Should have list', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });
})