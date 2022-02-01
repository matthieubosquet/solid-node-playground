import type { Quad } from "n3";
import { Parser, Store } from "n3";

export function loadRdfString(
  rdf: string,
  store: Store<Quad> = new Store()
): Store<Quad> {
  store.addQuads(new Parser().parse(rdf));
  return store;
}
