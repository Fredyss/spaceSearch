import { shallow } from "enzyme";

test("shows how async / await works", async () => {
	const value = await Promise.resolve(true);
	expect(value).toBe(true);
});
