import { PortableTextBlock } from "next-sanity";
import { FooterType } from "../common/Footer";
import { HeaderType } from "../common/Header";
import { CustomImageType } from "./CustomImage";
export type CTA = {
  label: string;
  link: string;
};
export type HomeSectionType =
  | HomeHeroSection
  | HomeAboutSection
  | HomeProductsSection;

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
  cta: CTA;
};
export type HomeProductsSection = {
  _key: string;
  title: string;
  tabs: ProductTab[];
};

export type TabContent = {
  heading: string;
  description: string;
  product_image: CustomImageType;
  cta: CTA;
};

export type ProductTab = {
  _key: string;
  tab_name: string;
  content: TabContent;
};

type HeroImage = {
  _key: string;
  title: CTA;
  description: string;
  image: CustomImageType;
};
