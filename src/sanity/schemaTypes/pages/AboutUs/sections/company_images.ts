import { defineField, defineType } from "sanity";

export const CompanyImagesSection = defineType({
  name: "company_images",
  title: "Company Images Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Section Title (Ex. About Us)",
    }),
    defineField({
      name: "images",
      title: "Comany Album Images",
      type: "array",
      of: [{ type: "custom_image" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Company Images Section",
      };
    },
  },
});
