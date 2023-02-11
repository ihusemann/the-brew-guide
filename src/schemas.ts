import { z } from "astro:content";

export const guideSchema = z.object({
  isDraft: z.boolean(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  author: z.object({
    name: z.string(), 
    slug: z.string(),
  }),
  pubDate: z.date(),
  tags: z.array(z.string()),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  equipment: z.array(
    z.object({
      name: z.string(),
    })
  ),
});
