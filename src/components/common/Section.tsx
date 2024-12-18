const Section = ({ sections }) => {
  return sections?.map((section: any) => {
    switch (section?._type) {
      case "about_us_title":
        return "about_us_title";
      case "company_album":
        return "company_album";
      case "facts_sheet":
        return "facts_sheet";
      case "company_images":
        return "company_images";
      default:
        break;
    }
  });
};

export default Section;
