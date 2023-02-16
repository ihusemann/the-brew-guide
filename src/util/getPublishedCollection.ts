import { getCollection } from "astro:content";

/**
 * Returns all published posts.  Optionally, returns the posts including a specific tag.
 */
export const getPublishedPosts = async (tag?: string) => {
  const entries = await getCollection("posts");

  // filter out the draft posts in non-development environments.  getCollection() should be able to natively do this type of filtering, but throws a type error.  Workaround for now.
  const published =
    import.meta.env.ENVIRONMENT !== "development"
      ? entries.filter(({ data }) => !data.isDraft)
      : entries;

  return !tag
    ? published
    : published.filter(({ data }) =>
        data.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase())
      );
};
