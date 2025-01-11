import { defineField, defineType } from "sanity";

export const OurProjectsSection = defineType({
  name: "home_projects_section",
  title: "Projects Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Section Title",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Section Description",
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      validation: (Rule) =>
        Rule.max(4).error("You can add a maximum of 4 projects."),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "singlelink",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Project Image",
              type: "custom_image",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image.image",
            },
            prepare({ title, media }) {
              return {
                title,
                media,
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
        title: "Projects Section",
      };
    },
  },
});
