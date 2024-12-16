import { FooterType } from "../common/Footer";
import { HeaderType } from "../common/Header";
import { CustomImageType } from "./CustomImage";

export type HomePageType = {
  _id: string;
  _type: string;
  slug: string;
  logo: CustomImageType;
  header: HeaderType;
  footer: FooterType;
  sections: (HomeHeroSection | HomeAboutSection | HomeProductsSection)[];
};
export type HomeHeroSection = {
  _key: string;
  images: HeroImage[];
};
export type HomeAboutSection = {
  _key: string;
  title: string;
  description: string;
  business_details: BusinessDetails[];
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

export type Product = {
  _key: string;
  title: string;
  description: string;
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
  image: CustomImageType;
};
