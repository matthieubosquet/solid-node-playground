import {
  createSolidDataset,
  deleteSolidDataset,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";
import type { Session } from "@inrupt/solid-client-authn-node";
import { getEnvironment, getSession, setPublicAccess } from "../../../src/mod";

const env = getEnvironment();
let session: Session;
let resource: string;

beforeAll(async () => {
  session = await getSession(env);
  resource = `${env.pod}test-${session.info.sessionId}`;
  await saveSolidDatasetAt(resource, createSolidDataset(), {
    fetch: session.fetch,
  });
});

afterAll(async () => {
  await deleteSolidDataset(resource, {
    fetch: session.fetch,
  });
});

describe("setPublicAccess", () => {
  it("returns", async () => {
    expect(await setPublicAccess(resource, session)).toEqual(
      expect.objectContaining({ graphs: { default: {} } })
    );
  });
});
