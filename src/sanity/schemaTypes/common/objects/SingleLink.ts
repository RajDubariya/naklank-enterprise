import { Link as LinkIcon, ChevronDown } from "lucide-react";
import { defineField, defineType } from "sanity";

export const SingleLink = defineType({
  name: "singlelink",
  title: "Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "link",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Untitled Link",
        subtitle: subtitle,
        icon: LinkIcon,
      };
    },
  },
});
