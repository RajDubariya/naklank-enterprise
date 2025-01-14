import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CustomImageType } from "./CustomImage";

export type FooterType = {
  _type: string;
  footerlinks: {
    _key: string;
    name: string;
    links: {
      _key: string;
      label: string;
      link: string;
    }[];
  }[];
  contactDetails: Contact[];
  socialMedia: Social[];
};

export type Contact = {
  _key: string;
  icon: SanityImageSource;
  label: string;
  link?: string;
};
export type Social = {
  _key: string;
  icon: SanityImageSource;
  url: string;
};
