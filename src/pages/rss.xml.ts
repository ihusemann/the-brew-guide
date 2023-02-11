import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function get(context: APIContext) {
  const guides = await getCollection("guides");
  return rss({
    title: "The Brew Guide",
    description:
      "Brew up better coffee at home!  The Brew Guide has everything you need to get up-and-running with exceptional coffee and espresso.",
    site: context.site as unknown as string,
    items: guides.map((guide) => ({
      title: guide.data.title,
      pubDate: guide.data.pubDate,
      description: guide.data.description,
      link: `/guides/${guide.slug}`,
    })),
  });
}
