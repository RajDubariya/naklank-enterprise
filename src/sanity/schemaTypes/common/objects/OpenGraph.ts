import { ChartNetwork } from "lucide-react";
import { defineField, defineType } from "sanity";

export const OpenGraph = defineType({
  name: "opengraph",
  title: "Open Graph",
  type: "object",
  icon: ChartNetwork,
  fields: [
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "custom_image",
    }),
    defineField({
      name: "title",
      title: "Open Graph Title",
      type: "string",
      description:
        "The title of the page, as it should appear on social media.",
    }),
    defineField({
      name: "description",
      title: "Open Graph Description",
      type: "text",
      description: "A brief description of the page content.",
    }),
    defineField({
      name: "url",
      title: "Open Graph URL",
      type: "url",
      description: "The canonical URL of the page.",
      initialValue: "https://geniusseo.net/",
    }),
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "The name of the website.",
    }),
    defineField({
      name: "type",
      title: "Open Graph Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
        ],
      },
      description: "The type of the object, e.g., website, article.",
    }),
  ],
});
