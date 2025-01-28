import { Search } from "lucide-react";
import { defineField, defineType } from "sanity";

export const SEO = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: Search,
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph ",
      type: "opengraph",
    }),
  ],
});
