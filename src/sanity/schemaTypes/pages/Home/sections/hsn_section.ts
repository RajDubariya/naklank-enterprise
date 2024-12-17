import { defineField, defineType } from "sanity";

export const HomeHsnSection = defineType({
  name: "home_hsn_section",
  title: "HSN Section",
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
      name: "hsn_details",
      title: "HSN Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "hsn_code",
              title: "HSN Code",
              type: "string",
            }),
            defineField({
              name: "hsn_description",
              title: "HSN Descriptoon",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "HSN Section",
      };
    },
  },
});
