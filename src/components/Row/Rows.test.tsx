import React from "react";
import { shallow } from "enzyme";
import { Rows } from "./Rows";

const testData = {
	title: "test",
	describe: "test1",
};

describe("<Rows />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Rows data={testData} type="string" />);
	});

	it("Should have main item", () => {
		expect(wrapper.find("div").children()).toHaveLength(3);
	});
});
