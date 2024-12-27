import { defineField, defineType } from "sanity";

export const ProjectsSection = defineType({
  name: "projects",
  title: "Projects Section",
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
              name: "images",
              title: "Images",
              type: "array",
              description: "First Title",
              of: [{ type: "custom_image" }],
            }),
            defineField({
              name: "details",
              title: "Details",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "detail1",
                      title: "Detail 1",
                      type: "string",
                      description: "First detail field",
                    }),
                    defineField({
                      name: "detail2",
                      title: "Detail 2",
                      type: "string",
                      description: "Second detail field",
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "details[0].detail1",
              media: "images[0].image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || "Untitled Item",
                media: media || undefined,
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
