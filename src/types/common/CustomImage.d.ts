import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type CustomImageType = {
  _type: string;
  alt: string;
  image: SanityImageSource;
};
