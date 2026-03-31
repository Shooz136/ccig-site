export const normalizePageSlug = (slug: string) => {
  if (slug === "home" || slug === "index") {
    return "";
  }

  if (slug.endsWith("/index")) {
    return slug.slice(0, -"/index".length);
  }

  return slug;
};

export const getPagePreviewImage = (sections: Array<Record<string, any>> = []) => {
  for (const section of sections) {
    if (section?.image?.src) {
      return section.image.src;
    }

    if (Array.isArray(section?.slides) && section.slides[0]?.image?.src) {
      return section.slides[0].image.src;
    }

    if (Array.isArray(section?.items) && section.items[0]?.image?.src) {
      return section.items[0].image.src;
    }
  }

  return undefined;
};
