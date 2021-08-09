import React from "react";
import { shallow } from "enzyme";
import { MobileNavigation } from "./MobileNavigation";

describe("<NavigationItem />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<MobileNavigation />);
	});

	it("Should have Navigation Links", () => {
		expect(wrapper.find("#menu").children()).toHaveLength(3);
	});
});
