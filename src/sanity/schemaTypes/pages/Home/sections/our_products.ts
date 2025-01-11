import { defineField, defineType } from "sanity";

export const OurProductsSection = defineType({
  name: "our_products_section",
  title: "Our Products Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Section Title",
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "singlelink",
    }),
    defineField({
      name: "products",
      title: "Products",
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
              name: "firstimage",
              title: "Project First Image",
              type: "custom_image",
            }),
            defineField({
              name: "secondimage",
              title: "Project Second Image",
              type: "custom_image",
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "firstimage.image",
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
        title: "Our Some Products Section",
      };
    },
  },
});
