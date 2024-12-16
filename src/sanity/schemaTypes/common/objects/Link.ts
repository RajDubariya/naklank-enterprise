import { Link as LinkIcon, ChevronDown } from "lucide-react";
import { defineField, defineType } from "sanity";

export const Link = defineType({
  name: "link",
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
      description: "Main link URL",
    }),
    defineField({
      name: "dropdownLinks",
      title: "Dropdown Links",
      type: "array",
      icon: ChevronDown,
      description: "Optional dropdown links for this menu item",
      of: [
        {
          type: "object",
          icon: LinkIcon,
          fields: [
            defineField({
              name: "label",
              title: "Dropdown Link Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Dropdown Link URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "link",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "link",
      dropdownCount: "dropdownLinks.length",
    },
    prepare(selection) {
      const { title, subtitle, dropdownCount } = selection;
      return {
        title: title || "Untitled Link",
        subtitle:
          subtitle ||
          (dropdownCount ? `${dropdownCount} dropdown links` : "No link"),
        icon: LinkIcon,
      };
    },
  },
});
