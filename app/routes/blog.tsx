import { json, type LoaderArgs } from "@remix-run/cloudflare";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getTitleFromBlogName } from "~/utils";
import { fetchBlogs } from "~/utils/blog.server";

export async function loader({ context }: LoaderArgs) {
    const githubAccessToken = context.GITHUB_ACCESS_TOKEN as string;
    const response = await fetchBlogs({ githubAccessToken });
    if (response instanceof Error) throw response;
    return json({ blogs: response });
}

export default function BlogIndex() {
    const { blogs } = useLoaderData<typeof loader>();

    return (
        <>
            <p className="text-3xl">Blogs:</p>
            <ul className="my-6">
                {blogs.map((blog, index) => (
                    <li key={blog} className="text-lg mt-4">
                        {index + 1}
                        {". "}
                        <Link to={`/blog/${getTitleFromBlogName(blog)}`}>{getTitleFromBlogName(blog)}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    );
}
