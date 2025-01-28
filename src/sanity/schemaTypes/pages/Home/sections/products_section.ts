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
      description: "Section Title",
    }),
    defineField({
      name: "tabs",
      title: "Product Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "tab_name",
              title: "Tab Name",
              type: "string",
              description: "Name of the tab",
            }),
            defineField({
              name: "content",
              title: "Tab Content",
              type: "object",
              fields: [
                defineField({
                  name: "heading",
                  title: "Heading",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
                defineField({
                  name: "product_image",
                  title: "Product Image",
                  type: "custom_image",
                }),
                defineField({
                  name: "cta",
                  title: "CTA Button",
                  type: "singlelink",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "tab_name",
              media: "content.product_image.image",
            },
            prepare({ title, media }) {
              return {
                title: title || "No Tab Name",
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
        title: "Products Section",
      };
    },
  },
});
