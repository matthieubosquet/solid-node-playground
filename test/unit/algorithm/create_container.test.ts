/* eslint-disable @typescript-eslint/naming-convention, camelcase */
import {
  createContainerInContainer,
  getSolidDataset,
} from "@inrupt/solid-client";
import type { Session } from "@inrupt/solid-client-authn-node";
import { getEnvironment, getSession } from "../../../src/mod";

const env = getEnvironment();
let session: Session;
let resource: string;
let options: { fetch: typeof fetch };

beforeAll(async () => {
  session = await getSession(env);
  options = { fetch: session.fetch };
});

// eslint-disable-next-line jest/no-focused-tests
describe("create container", () => {
  it("Creates a container", async () => {
    resource = `${env.pod}/test-${session.info.sessionId}/`;
    await createContainerInContainer(resource, options);
    const container = await getSolidDataset(resource, session);
    expect(container).toMatchObject({
      graphs: { default: {} },
      internal_resourceInfo: { isRawData: false },
    });
  });
});
