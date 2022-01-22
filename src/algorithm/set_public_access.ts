import { acp_v4 } from "@inrupt/solid-client";
import type { Session } from "@inrupt/solid-client-authn-node";
import type { WithAccessibleAcr } from "@inrupt/solid-client/dist/acp/acp";

export async function setPublicAccess(
  resource: string,
  session: Session
): Promise<string> {
  const resourceWithAcr = (await acp_v4.getSolidDatasetWithAcr(resource, {
    fetch: session.fetch,
  })) as WithAccessibleAcr;

  let resourcePublicMatcher = acp_v4.createResourceMatcherFor(
    resourceWithAcr,
    "match-public"
  );
  resourcePublicMatcher = acp_v4.setPublic(resourcePublicMatcher);

  let resourcePolicy = acp_v4.createResourcePolicyFor(
    resourceWithAcr,
    "public-policy"
  );
  resourcePolicy = acp_v4.addAllOfMatcherUrl(
    resourcePolicy,
    resourcePublicMatcher
  );
  resourcePolicy = acp_v4.setAllowModes(resourcePolicy, {
    read: true,
    append: false,
    write: false,
  });

  let changedResourceWithAcr = acp_v4.setResourceMatcher(
    resourceWithAcr,
    resourcePublicMatcher
  );
  changedResourceWithAcr = acp_v4.addPolicyUrl(
    changedResourceWithAcr,
    resourcePublicMatcher.url
  );
  changedResourceWithAcr = acp_v4.setResourcePolicy(
    changedResourceWithAcr,
    resourcePolicy
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const x = await acp_v4.saveAcrFor(changedResourceWithAcr, { fetch });
  console.log(x);

  // return getSolidDataset(resource);
  return "value";
}
