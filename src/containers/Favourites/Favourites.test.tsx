import { shallow } from "enzyme";
import { Favourites } from "./Favourites";

describe('', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Favourites />);
  })

  it('Should have length', () => {
    expect(wrapper).toHaveLength(1);
  });

})