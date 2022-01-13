import { getEnvironment } from "../../../src/mod";

describe("getEnvironment", () => {
  it("returns", () => {
    const env = getEnvironment();
    expect(typeof env.clientId === "string").toBe(true);
    expect(typeof env.clientSecret === "string").toBe(true);
    expect(typeof env.name === "string").toBe(true);
    expect(typeof env.oidcIssuer === "string").toBe(true);
    expect(typeof env.pod === "string").toBe(true);
  });
});
