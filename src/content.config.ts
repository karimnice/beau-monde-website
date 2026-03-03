import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const professionals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/professionals" }),
  schema: ({ image }) =>
    z.object({
      businessName: z.string(),
      stylistName: z.string(),
      title: z.string(),
      category: z
        .union([
          z.enum(["hair", "nails", "skincare", "brows-lashes"]),
          z.array(z.enum(["hair", "nails", "skincare", "brows-lashes"])),
        ])
        .transform((val) => (Array.isArray(val) ? val : [val])),
      bio: z.string(),
      photo: image().optional(),
      services: z.array(z.string()).optional(),
      bookingUrl: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().optional(),
      suite: z.string().optional(),
      order: z.number().default(99),
    }),
});

export const collections = { professionals };
