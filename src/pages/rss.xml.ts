import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "src/util";

export async function get(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: "The Brew Guide",
    description:
      "Brew up better coffee at home!  The Brew Guide has everything you need to get up-and-running with exceptional coffee and espresso.",
    site: context.site as unknown as string,
    items: posts.map(
      ({ slug, data: { title, subtitle, description, pubDate } }) => ({
        title: title + subtitle,
        description: description,
        pubDate: pubDate,
        link: `/${slug}`,
      })
    ),
  });
}
