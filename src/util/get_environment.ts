import { config } from "dotenv-flow";
import type { TEnvironment } from "../type/t_environment";

export function getEnvironment(): TEnvironment {
  if (typeof process.env.NAME === "undefined") {
    config({ path: __dirname.concat("/../env/") });
  }
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
  if (
    process.env.NAME !== "Inrupt Dev-Next" &&
    process.env.NAME !== "Inrupt Production"
  ) {
    throw new Error(`Unknown environment: ${process.env.NAME}`);
  }
  return {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    name: process.env.NAME,
    oidcIssuer: process.env.OIDC_ISSUER,
    pod: process.env.STORAGE_SERVICE.concat(process.env.POD_ID).concat("/"),
  };
}
