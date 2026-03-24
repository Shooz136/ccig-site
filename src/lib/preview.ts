const getPreviewToken = () =>
  process.env.PREVIEW_TOKEN || process.env.PUBLIC_PREVIEW_TOKEN || "";

export const isValidPreviewRequest = (url: URL) => {
  const configuredToken = getPreviewToken();

  if (!configuredToken) {
    return false;
  }

  return url.searchParams.get("token") === configuredToken;
};
