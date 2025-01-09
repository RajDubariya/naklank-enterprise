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
      description: "Section Title",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Section Description",
    }),
    defineField({
      name: "image",
      title: "About Us Image",
      type: "custom_image",
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "link",
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
