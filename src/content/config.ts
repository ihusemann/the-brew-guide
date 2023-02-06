import { defineCollection, z } from "astro:content";
import { guideSchema } from "../schemas";

const guideCollection = defineCollection({
  schema: guideSchema,
});

export const collections = {
  guides: guideCollection,
};
