import { defineField, defineType } from "sanity";

export const AboutUsSection = defineType({
  name: "about_us",
  title: "About Us Section",
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
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "maintitle",
              title: "Main Title",
              type: "string",
              description: "First Title",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Second Title",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
              description: "Description for the section",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "custom_image",
              description: "Image for the section",
            }),
          ],
          preview: {
            select: {
              title: "maintitle",
              media: "image.image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || "Untitled",
                media: media,
              };
            },
          },
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
