import { bundleMDX } from "mdx-bundler";
import resume from "~/data/resume.json";

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  backgroundImage?: string;
  createdAt: string;
  updatedAt: string;
  draft: boolean;
};

export async function toArticle() {
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import("rehype-highlight").then((module) => module.default),
    import("remark-gfm").then((module) => module.default),
  ]);

  const article = await bundleMDX<Frontmatter>({
    source: resume.file,
    cwd: process.cwd(),
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
        ".gif": "dataurl",
      };
      return options;
    },
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];
      return options;
    },
  });
  return {
    ...article,
    frontmatter: {
      ...article.frontmatter,
    },
  };
}
