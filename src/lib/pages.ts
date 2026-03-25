export const normalizePageSlug = (slug: string) => {
  if (slug === "home" || slug === "index") {
    return "";
  }

  if (slug.endsWith("/index")) {
    return slug.slice(0, -"/index".length);
  }

  return slug;
};
