import { getCollection } from "astro:content";

/**
 * Returns all published posts.  Optionally, returns the posts including a specific tag. 
 */
export const getPublishedPosts = async (tag?: string) => {
  const entries = await getCollection("posts");

  // getCollection() should be able to natively do this filtering, but throws a type error.  Workaround for now.
  const published = entries.filter(({ data }) => !data.isDraft);

  return !tag
    ? published
    : published.filter(({ data }) =>
        data.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())
      );
};
