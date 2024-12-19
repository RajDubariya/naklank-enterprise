import { PortableTextBlock } from "next-sanity";
import { CustomImageType } from "../common/CustomImage";

export type AboutSectionType = {
  _key: string;
  title: string;
  description: string;
  items: Item[];
};
export type Item = {
  _key: string;
  maintitle: string;
  title: string;
  description: PortableTextBlock;
  image: CustomImageType;
};
