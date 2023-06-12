export const fetchBlog = async (blogname : string) => {
  const url = `https://api.github.com/repos/himanshubhardwaz/portfolio-2.0/blogs/${blogname}`;
  return fetch(url)
  .then((response) => response.text())
  .then((response) => response);
};
