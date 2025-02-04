import { CustomImageType } from "../common/CustomImage";

export type ProjectsSectionType = {
  title: string;
  description: string;
  items: ProjectItem[];
  bg_image: CustomImageType;
};

export type ProjectItem = {
  _key: string;
  images: CustomImageType[];
  details: ProjectDetail[];
};

export type ProjectDetail = {
  _key: string;
  detail1: string;
  detail2: string;
};
