import { CustomImageType } from "./CustomImage";

export type FooterType = {
  _type: string;
  slogan: string;
  eula: string;
  logo: CustomImageType;
  footerlinks: {
    _key: string;
    name: string;
    links: {
      _key: string;
      label: string;
      link: string;
    }[];
  }[];
  contactDetails: string[];
};
