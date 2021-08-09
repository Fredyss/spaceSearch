import React from "react";
import { shallow } from "enzyme";
import ReactPlayer from "react-player";

test("shows how async / await works", async () => {
	const value = await Promise.resolve(true);
	expect(value).toBe(true);
});

describe("<Navigation />", () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = shallow(<ReactPlayer />);
	});

	it("Should have length", () => {
		expect(wrapper).toHaveLength(1);
	});
});
