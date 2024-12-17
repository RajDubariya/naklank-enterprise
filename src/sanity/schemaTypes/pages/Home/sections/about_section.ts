import { defineField, defineType } from "sanity";

export const HomeAboutSection = defineType({
  name: "home_about_section",
  title: "About Section",
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
    defineField({
      name: "business_details",
      title: "Key Business Details",
      type: "array",
      description: "List of key business points (title and value)",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Point Icon",
              type: "custom_image",
            }),
            defineField({
              name: "point_title",
              title: "Point Title",
              type: "string",
              description:
                "The title of the key business detail (e.g., Nature of Business)",
            }),
            defineField({
              name: "point_value",
              title: "Point Value",
              type: "string",
              description:
                "The value of the key business detail (e.g., Manufacturer)",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Section",
      };
    },
  },
});
