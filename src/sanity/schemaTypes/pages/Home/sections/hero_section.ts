import { defineField, defineType } from "sanity";

export const HeroSection = defineType({
  name: "hero_section",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      description: "Product Images For Image Slider.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Image Title",
              type: "singlelink",
              description: "Title of the image.",
            }),
            defineField({
              name: "description",
              title: "Image Description",
              type: "text",
              description: "Description of the image.",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "custom_image",
              description: "The product image.",
            }),
          ],
          preview: {
            select: {
              title: "title.label", // Selects the image title
              media: "image.image", // Selects the image as media
            },
            prepare({ title, media }) {
              return {
                title: title || "No Title",
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
        title: "Hero Section",
      };
    },
  },
});
