import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Component from "~/content/blogs/memegeneratorai.md";

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug;
  if (!slug) throw new Error("No slug specified");

  return json({ slug });
};

export default function Blog() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <>
      slug : {slug}
      <Component />
    </>
  );
}
