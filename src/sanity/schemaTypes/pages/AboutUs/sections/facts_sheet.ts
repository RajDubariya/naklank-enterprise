import { defineField, defineType } from "sanity";

export const FactsSheetSection = defineType({
  name: "facts_sheet",
  title: "Facts Sheet Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Section Title (Ex. About Us)",
    }),
    defineField({
      name: "details",
      title: "Facts Sheet Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Facts Sheet Section",
      };
    },
  },
});
