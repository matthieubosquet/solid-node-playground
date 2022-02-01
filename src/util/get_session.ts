import { Session } from "@inrupt/solid-client-authn-node";
import type { IEnvironment } from "../type/i_environment";
import { getEnvironment } from "./get_environment";

export async function getSession(environment?: IEnvironment): Promise<Session> {
  const { oidcIssuer, clientId, clientSecret } =
    environment ?? getEnvironment();
  const session = new Session();
  await session.login({
    oidcIssuer,
    clientId,
    clientName: "Solid Playground",
    clientSecret,
  });
  return session;
}
