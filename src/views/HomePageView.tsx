import HomeAboutSection from "@/components/pages/HomePage/HomeAboutSection";
import HomeHeroSection from "@/components/pages/HomePage/HomeHeroSection";
import HomeProductsSection from "@/components/pages/HomePage/HomeProductsSection";
import HomeProjectsSection from "@/components/pages/HomePage/HomeProjectsSection";
import OurProductsSection from "@/components/pages/HomePage/OurProductsSection";
import { HomeSectionType } from "@/types/pages/HomePage";

interface Props {
  sections: HomeSectionType[];
}
const HomePageView = (props: Props) => {
  const { sections } = props;

  return sections?.map((section: any) => {
    switch (section?._type) {
      case "hero_section":
        return <HomeHeroSection data={section} />;
      case "home_about_section":
        return <HomeAboutSection data={section} />;
      case "home_products_section":
        return <HomeProductsSection data={section} />;
      case "home_projects_section":
        return <HomeProjectsSection data={section} />;
      case "our_products_section":
        return <OurProductsSection data={section} />;

      default:
        break;
    }
  });
};

export default HomePageView;
