import { ImageIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const CustomImage = defineType({
  name: "custom_image",
  title: "Custom Image",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Alt Tag",
      type: "string",
    }),
  ],
});