import { json, type LoaderArgs } from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getTitleFromBlogName } from "~/utils";
import { fetchBlogs } from "~/utils/blog.server";

export async function loader({ context }: LoaderArgs) {
  const githubApiToken = context.GITHUB_ACCESS_TOKEN as string;
  const response = await fetchBlogs({ githubApiToken });
  if(response instanceof Error) throw response;
  return json({blogs : response});
}

export default function BlogIndex() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <>
      Blog:
      <ul>
        {blogs.map((blog) => (
          <li key={blog}>
            <Link to={`/blog/${getTitleFromBlogName(blog)}`}>
              {getTitleFromBlogName(blog)}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
