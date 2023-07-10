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
        <main className="min-h-[calc(100vh-210px)] sm:min-h-[calc(100vh-270px)]">
            <h1 className="main-heading text-7xl">Blogs </h1>
            <ul className="my-6">
                {blogs.map((blog, index) => {
                    const blogname = getTitleFromBlogName(blog);
                    return (
                        <li key={blog} className="text-lg mt-4">
                            {index + 1}
                            {". "}
                            <Link to={`/blog/${blogname}`}>{blogname}</Link>
                        </li>
                    )}
                )}
            </ul>
            <Outlet />
        </main>
    );
}
