import { defineCollection } from "astro:content";
import { postSchema } from "../schemas";

const postCollection = defineCollection({
  schema: postSchema,
});

export const collections = {
  posts: postCollection,
};
