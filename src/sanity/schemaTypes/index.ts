import { type SchemaTypeDefinition } from "sanity";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { AllLinks } from "./common/objects/AllLinks";
import { CustomImage } from "./common/objects/CustomImage";
import { Link } from "./common/objects/Link";
import { OpenGraph } from "./common/objects/OpenGraph";
import { SEO } from "./common/objects/SEO";
import { SingleLink } from "./common/objects/SingleLink";
import { HomePage } from "./pages/Home/HomePage";
import { HomeAboutSection } from "./pages/Home/sections/about_section";
import { HeroSection } from "./pages/Home/sections/hero_section";
import { HomeProductsSection } from "./pages/Home/sections/products_section";
import { Page } from "./pages/page";
import { AboutUsSection } from "./pages/sections/about_us";
import { ProjectsSection } from "./pages/sections/projects";
import { OurProjectsSection } from "./pages/Home/sections/our_projects";
import { OurProductsSection } from "./pages/Home/sections/our_products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Link,
    AllLinks,
    SingleLink,
    CustomImage,
    Header,
    Footer,
    Page,
    HomePage,
    HeroSection,
    HomeAboutSection,
    HomeProductsSection,
    OurProjectsSection,
    OurProductsSection,
    AboutUsSection,
    ProjectsSection,
    OpenGraph,
    SEO,
  ],
};
