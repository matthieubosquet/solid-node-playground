import { getSession } from "../../../src/mod";

describe("getSession", () => {
  it("returns", async () => {
    expect(await getSession()).toEqual(expect.objectContaining({}));
  });
});
