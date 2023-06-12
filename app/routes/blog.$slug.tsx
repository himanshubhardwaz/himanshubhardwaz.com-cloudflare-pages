import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchBlog } from "~/utils/blog.server";

export const loader = async ({ params, request, context }: LoaderArgs) => {
  const slug = params.slug;
  if (!slug) throw new Error("No slug specified");

  const blog  = fetchBlog(`${slug}.md`);

  return json({ blog  });
};

export default function Blog() {
  const { blog } = useLoaderData<typeof loader>();
  return <>slug : {JSON.stringify(blog)};</>;
}
