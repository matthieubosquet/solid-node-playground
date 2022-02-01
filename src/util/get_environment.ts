import type { IEnvironment } from "../type/i_environment";

export function getEnvironment(): IEnvironment {
  if (
    typeof process.env.CLIENT_ID !== "string" ||
    typeof process.env.CLIENT_SECRET !== "string" ||
    typeof process.env.NAME !== "string" ||
    typeof process.env.OIDC_ISSUER !== "string" ||
    typeof process.env.POD_ID !== "string" ||
    typeof process.env.STORAGE_SERVICE !== "string"
  ) {
    throw new Error(`Environment variable missing: ${process.env.toString()}`);
  }
  return {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    name: process.env.NAME,
    oidcIssuer: process.env.OIDC_ISSUER,
    pod: process.env.STORAGE_SERVICE.concat(process.env.POD_ID).concat("/"),
  };
}
