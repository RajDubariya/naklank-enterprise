import { PanelBottom } from "lucide-react";
import { defineField, defineType } from "sanity";

export const ContactItem = defineType({
  name: "contactItem",
  title: "Contact Item",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      description: "Icon (e.g., 'MapPin', 'Phone', 'Mail')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link (Optional)",
      type: "string",
      description: "URL for clickable contact details (e.g., mailto:, tel:)",
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "link",
      media: "icon",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: subtitle || "No link provided",
        media,
      };
    },
  },
});

// Social Media Link Type
export const SocialMediaLink = defineType({
  name: "socialMediaLink",
  title: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      description: "Icon key from Lucide icons (e.g., 'Facebook', 'Twitter')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "url",
      media: "icon",
    },
    prepare({ title, media }) {
      return {
        title: title,
        media,
      };
    },
  },
});

// Updated Footer Type
export const Footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: PanelBottom,
  fields: [
    defineField({
      name: "footerlinks",
      title: "All Footer Links",
      type: "array",
      description: "Links for Footer.",
      of: [{ type: "alllinks" }],
    }),
    defineField({
      name: "contactDetails",
      title: "Contact Details",
      type: "array",
      of: [{ type: "contactItem" }],
      description: "Contact details with icons (address, phone, email, etc.)",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialMediaLink" }],
      description: "Social media platform links with icons",
    }),
    // defineField({
    //   name: "eula",
    //   title: "End User License Agreement",
    //   type: "string",
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
