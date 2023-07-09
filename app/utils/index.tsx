export const createLogo = (name: string) =>
    name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

export const getTitleFromBlogName = (blogName: string) => {
    const splits = blogName.split(".");
    return splits[0];
};
