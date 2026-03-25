import { createMarkdownProcessor } from "@astrojs/markdown-remark";

let markdownProcessorPromise: ReturnType<typeof createMarkdownProcessor> | undefined;

export const getMarkdownProcessor = () => {
  markdownProcessorPromise ??= createMarkdownProcessor();

  return markdownProcessorPromise;
};
