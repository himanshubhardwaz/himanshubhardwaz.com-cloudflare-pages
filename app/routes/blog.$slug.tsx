import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { fetchBlog } from "~/utils/blog.server";
import { useLoaderData } from "@remix-run/react";
import {marked} from "marked"

export const loader = async ({ params, request, context }: LoaderArgs) => {
  const slug = params.slug;
  if (!slug) throw new Error("No slug specified");

  const blog = await fetchBlog(`${slug}`);

  return json({ blog : marked(blog)});
};

export default function Blog() {
  const { blog } = useLoaderData<typeof loader>();

  return (
    <>
     <div dangerouslySetInnerHTML={{__html : blog}} /> 
    </>
  );
}
