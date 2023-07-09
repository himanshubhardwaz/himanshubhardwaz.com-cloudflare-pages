interface Blog {
  content: string;
}

interface Content {
  name: string;
}

export const fetchBlog = async ({ slug, githubApiToken }:
  { slug: string; githubApiToken: string }): Promise<string | Error> => {
  const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/${slug}.md`;

  const headers = new Headers();
  const userAgent = navigator.userAgent;

  headers.append("User-Agent", userAgent);
  headers.append("Authorization", `Bearer ${githubApiToken}`);

  try {
    const response = await fetch(url, { headers });

    if (response.ok) {
      const data: Blog = await response.json();
      const content = atob(data.content);
      return content;
    } else {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }
  } catch (error) {
    console.log({errorMain: error})
    throw new Error("Could not fetch this blog!");
  }
};

export const fetchBlogs = async ({ githubApiToken }: { githubApiToken: string }): Promise<string[] | Error> => {
  const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/`;

  const headers = new Headers();
  const userAgent = navigator.userAgent;

  headers.append("User-Agent", userAgent);
  headers.append("Authorization", `Bearer ${githubApiToken}`);

  try {
    const response = await fetch(url, { headers });

    if (response.ok) {
      const data: Content[] = await response.json();
      const blogs = data.map((blog) => blog.name);
      return blogs;
    } else {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
  } catch (error) {
    throw new Error("Could not fetch blogs!");
  }
}