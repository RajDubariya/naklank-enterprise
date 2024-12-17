import { defineField, defineType } from "sanity";

export const HomeProductsSection = defineType({
  name: "home_products_section",
  title: "Products Section",
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
      name: "products",
      title: "Products",
      type: "array",
      description: "List of key business points (title and value)",
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
              type: "text",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "string",
            }),
            defineField({
              name: "product_image",
              title: "Product Image",
              type: "custom_image",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "product_image.image",
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
    defineField({
      name: "cta",
      title: "CTA button",
      type: "singlelink",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Products Section",
      };
    },
  },
});
