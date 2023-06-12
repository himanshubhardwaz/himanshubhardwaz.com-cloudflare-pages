import fs from 'fs';
import path from 'path';

// This code reads the content of the blogs directory and returns an array of objects containing the name of each blog and its contents.

export function getBlog(): {
  blogName: string;
  blog: string;
}[] {
  const blogNames = fs.readdirSync(path.join(process.cwd(), 'app/content/blogs'));
  return blogNames.map((blogName) => {
    const blog = fs.readFileSync(
      path.join(process.cwd(), 'app/content/blogs', blogName),
      'utf-8'
    );
    return {
      blogName,
      blog,
    };
  });
}