//@ts-ignore
//@ts-nocheck
import AboutSection from "../pages/AboutUsPage/AboutSection";
import ProjectsSection from "../pages/projects/ProjectsSection";

const Section = ({ sections }) => {
  return sections?.map((section: any) => {
    switch (section?._type) {
      case "about_us":
        return <AboutSection data={section} />;
      case "projects":
        return <ProjectsSection data={section} />;
      default:
        break;
    }
  });
};

export default Section;
