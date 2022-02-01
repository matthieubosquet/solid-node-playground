import { getWebid } from "../../../src/mod";

describe("getWebid", () => {
  it("returns", async () => {
    expect(await getWebid("https://id.inrupt.com/matthieu")).toEqual({
      oidcIssuer: new Set(["https://login.inrupt.com"]),
    });
  });
});
