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
  sections: HomeHeroSection[];
};
export type HomeHeroSection = {
  _key: string;
  images: HeroImage[];
};

type HeroImage = {
  _key: string;
  title: {
    label: string;
    link: string;
  };
  image: CustomImageType;
};
