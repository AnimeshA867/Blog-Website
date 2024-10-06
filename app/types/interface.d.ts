import { SanityImageSource } from "./../../sanity/node_modules/@sanity/asset-utils/src/types";
interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource | null;
}

interface blogContent {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}
