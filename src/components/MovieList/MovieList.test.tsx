import React from "react";
import { shallow } from "enzyme";
import { MovieList } from "./MovieList";
import { List } from "@material-ui/core";
import { Movie } from "../../shared/globals/Globals";

const testData = [
	{
		title: "test",
		describe: "test1",
		adult: false,
		backdrop_path: "",
		genre_ids: ["test"],
		id: 1,
		original_language: "test",
		original_title: "test",
		overview: "test",
		popularity: 1,
		poster_path: "test",
		release_date: "test",
		video: false,
		vote_average: 1,
		vote_count: 1,
	},
] as Movie[];
describe("<MovieList />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<MovieList data={testData} movieHandler={() => {}} />);
	});

	it("Should have list", () => {
		expect(wrapper.find(List)).toHaveLength(1);
	});
});
