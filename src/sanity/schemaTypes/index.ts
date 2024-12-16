import { type SchemaTypeDefinition } from "sanity";
import { Link } from "./common/objects/Link";
import { Header } from "./common/Header";
import { CustomImage } from "./common/objects/CustomImage";
import { HomePage } from "./pages/Home/HomePage";
import { AllLinks } from "./common/objects/AllLinks";
import { Footer } from "./common/Footer";
import { SingleLink } from "./common/objects/SingleLink";
import { HeroSection } from "./pages/Home/sections/hero_section";

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
  ],
};
