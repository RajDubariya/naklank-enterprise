import { PortableTextBlock } from "next-sanity";
import { FooterType } from "../common/Footer";
import { HeaderType } from "../common/Header";
import { CustomImageType } from "./CustomImage";

export type HomeSectionType =
  | HomeHeroSection
  | HomeAboutSection
  | HomeProductsSection
  | HomeHsnSection;

export type HomePageType = {
  _id: string;
  _type: string;
  slug: string;
  logo: CustomImageType;
  header: HeaderType;
  footer: FooterType;
  sections: HomeSectionType[];
};
export type HomeHeroSection = {
  _key: string;
  images: HeroImage[];
};
export type HomeAboutSection = {
  _key: string;
  title: string;
  description: string;
  image: CustomImageType;
  cta: { label: string; link: string };
};
export type HomeProductsSection = {
  _key: string;
  title: string;
  description?: string;
  cta: {
    link: string;
    label: string;
  };
  products: Product[];
};
export type HomeHsnSection = {
  _key: string;
  title: string;
  description?: string;
  hsn_details: { hsn_code: string; hsn_description: string }[];
};

export type Product = {
  _key: string;
  title: string;
  description: string;
  slug: string;
  product_image: CustomImageType;
};

type BusinessDetails = {
  _key: string;
  point_title: string;
  point_value: string;
  icon: CustomImageType;
};

type HeroImage = {
  _key: string;
  title: {
    label: string;
    link: string;
  };
  description: string;
  image: CustomImageType;
};
