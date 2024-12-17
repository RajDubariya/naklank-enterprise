import HomeAboutSection from "@/components/pages/HomePage/HomeAboutSection";
import HomeHeroSection from "@/components/pages/HomePage/HomeHeroSection";
import HomeHsnSection from "@/components/pages/HomePage/HomeHsnSection";
import HomeProductsSection from "@/components/pages/HomePage/HomeProductsSection";
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
      case "home_hsn_section":
        return <HomeHsnSection data={section} />;
      default:
        break;
    }
  });
};

export default HomePageView;
