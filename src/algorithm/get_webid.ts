import { DataFactory } from "n3";
import nodeFetch from "node-fetch";
import type { IWebId } from "../type/i_webid";
import { loadRdfString } from "../util/load_rdf_string";

export async function getWebid(webid: string): Promise<IWebId> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const response = await nodeFetch(webid, {
    headers: {
      accept: "text/turtle",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const data: string = await response.text();
  return {
    oidcIssuer: new Set(
      loadRdfString(data)
        .getQuads(
          null,
          DataFactory.namedNode("http://www.w3.org/ns/solid/terms#oidcIssuer"),
          null,
          null
        )
        .map((x) => x.object.value)
    ),
  };
}
