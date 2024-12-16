import { CustomImageType } from "./CustomImage";

export type HeaderType = {
  _id: string;
  _type: string;
  title: string;
  logo: CustomImageType;
  headerLinks: {
    _key: string;
    label: string;
    link: string;
    dropdownLinks?: {
      _key: string;
      label: string;
      link: string;
    }[];
  }[];
};
