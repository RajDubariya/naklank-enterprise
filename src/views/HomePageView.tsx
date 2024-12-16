import HomeHeroSection from "@/components/pages/HomePage/HomeHeroSection";
import { HomeHeroSection as HomeHeroSectionType } from "@/types/pages/HomePage";

interface Props {
  sections: HomeHeroSectionType[];
}
const HomePageView = (props: Props) => {
  const { sections } = props;

  return sections?.map((section: any) => {
    switch (section._type) {
      case "hero_section":
        return <HomeHeroSection data={section} />;
      default:
        break;
    }
  });
};

export default HomePageView;
