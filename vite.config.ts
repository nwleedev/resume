import mdx from "@mdx-js/rollup";
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const HOST = process.env.HOST === "true" ? true : false;
  const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
  return {
    plugins: [
      mdx({
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkGfm,
          rehypeHighlight,
        ],
      }),
      remixCloudflareDevProxy(),
      remix({
        ignoredRouteFiles: ["**/*.css"],
      }),
      tsconfigPaths(),
    ],
    server: {
      port: PORT,
      host: HOST,
    },
  };
});
