import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { fetchBlog } from "~/utils/blog.server";
import { useLoaderData, useRouteError, isRouteErrorResponse,} from "@remix-run/react";
import {marked} from "marked"

export const loader = async ({ params, context }: LoaderArgs) => {
  const slug = params.slug;
  const GITHUB_API_TOKEN = context.GITHUB_API_TOKEN as string;
  
  if (!slug) throw new Error("No slug specified");

  const blog = await fetchBlog({slug, githubApiToken : GITHUB_API_TOKEN});

  if (!blog) throw new Error("No blog found");

  return json({ blog : marked(blog)});
};

export default function Blog() {
  const { blog } = useLoaderData<typeof loader>();

  console.log({blog})

  return <div dangerouslySetInnerHTML={{__html : blog}} /> 
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  console.log({error})

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  let errorMessage = "Unknown error";

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

export function CatchBoundary({error} : {error : Error}) {
  return (
    <>
      {JSON.stringify(error)}
    </>
  )
}