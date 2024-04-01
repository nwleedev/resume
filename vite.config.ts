import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig(() => {
  const HOST = process.env.HOST === "true" ? true : false;
  const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
  return {
    plugins: [
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
