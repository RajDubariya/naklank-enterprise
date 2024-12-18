import { AboutSectionType } from "@/types/pages/AboutUsPage";
import React from "react";

const AboutSection = ({ data }: { data: AboutSectionType }) => {
  console.log(data?.title);

  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  );
};

export default AboutSection;
