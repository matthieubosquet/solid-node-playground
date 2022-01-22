import { getSession } from "../../../src/mod";

describe("getSession", () => {
  it("retrieves a session", async () => {
    expect(await getSession()).toEqual(expect.objectContaining({}));
  });
});
