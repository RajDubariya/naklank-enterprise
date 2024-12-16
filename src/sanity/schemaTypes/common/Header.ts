import { PanelTop } from "lucide-react";
import { defineField, defineType } from "sanity";

export const Header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: PanelTop,
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "custom_image",
    }),
    defineField({
      name: "headerLinks",
      title: "Header Links",
      type: "array",
      description: "Header Links.",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    select: {
      title: "logo.alt",
      media: "logo.image",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "No Alt Text",
        media,
      };
    },
  },
});
