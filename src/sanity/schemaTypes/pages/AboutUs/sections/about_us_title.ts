import { defineField, defineType } from "sanity";

export const AboutUsPageTitleSection = defineType({
  name: "about_us_title",
  title: "About Us Title Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Section Title (Ex. About Us)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Section Description",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Title Section",
      };
    },
  },
});
