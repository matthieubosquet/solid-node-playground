import { createSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";
import type { Session } from "@inrupt/solid-client-authn-node";
import { getEnvironment, getSession, setPublicAccess } from "../../../src/mod";
import type { TEnvironment } from "../../../src/types";

let env: TEnvironment;
let session: Session;
let sessionDataset: string;

beforeAll(async () => {
  env = getEnvironment();
  session = await getSession(env);
  sessionDataset = `${env.pod}acp-test-${session.info.sessionId}`;
  await saveSolidDatasetAt(sessionDataset, createSolidDataset(), {
    fetch: session.fetch,
  });
});

describe("setPublicAccess", () => {
  it("returns", async () => {
    expect(await setPublicAccess(sessionDataset, session)).toBe("value");
  });
});
