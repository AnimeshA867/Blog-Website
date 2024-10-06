import { SanityImageSource } from "./../sanity/node_modules/@sanity/asset-utils/src/types";
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-03-05",
  dataset: "production",
  projectId: "b8wx5dm2",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: unknown) {
  if (!source) return;
  return builder.image(source);
}
