import { type SchemaTypeDefinition } from "sanity";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { AllLinks } from "./common/objects/AllLinks";
import { CustomImage } from "./common/objects/CustomImage";
import { Link } from "./common/objects/Link";
import { SingleLink } from "./common/objects/SingleLink";
import { HomePage } from "./pages/Home/HomePage";
import { HomeAboutSection } from "./pages/Home/sections/about_section";
import { HeroSection } from "./pages/Home/sections/hero_section";
import { HomeProductsSection } from "./pages/Home/sections/products_section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Link,
    AllLinks,
    SingleLink,
    CustomImage,
    Header,
    Footer,
    HomePage,
    HeroSection,
    HomeAboutSection,
    HomeProductsSection
  ],
};
