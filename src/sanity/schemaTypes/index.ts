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
import { HomeHsnSection } from "./pages/Home/sections/hsn_section";
import { AboutUsPage } from "./pages/AboutUs/AboutUsPage";
import { AboutUsSection } from "./pages/AboutUs/sections/about_us";
import { CompanyAlbumSection } from "./pages/AboutUs/sections/company_album";
import { FactsSheetSection } from "./pages/AboutUs/sections/facts_sheet";
import { CompanyImagesSection } from "./pages/AboutUs/sections/company_images";
import { Page } from "./pages/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Page,
    Link,
    AllLinks,
    SingleLink,
    CustomImage,
    Header,
    Footer,
    HomePage,
    HeroSection,
    HomeAboutSection,
    HomeProductsSection,
    HomeHsnSection,
    AboutUsPage,
    AboutUsSection,
    CompanyAlbumSection,
    FactsSheetSection,
    CompanyImagesSection,
  ],
};
