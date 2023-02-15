import { z } from "astro:content";

const author = z.object({
  name: z.string(),
  slug: z.string(),
});

const image = z.object({
  src: z.string(),
  alt: z.string(),
});

const tags = z.array(z.string());

export const guideSchema = z.object({
  isDraft: z.boolean(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  author,
  pubDate: z.date(),
  tags,
  image,
});

export const gearSchema = z.object({
  isDraft: z.boolean(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  author,
  pubDate: z.date(),
  image,
  tags,
});
