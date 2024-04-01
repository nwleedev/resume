import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";

export default async function toJSON() {
  const __dirname = process.cwd();
  const resolve = (...paths: string[]) => path.resolve(__dirname, ...paths);
  const file = await fs.readFile(resolve("app/data/resume.mdx"), {
    encoding: "utf-8",
  });

  fs.writeFile(
    resolve("app/data/resume.json"),
    JSON.stringify({ id: "resume", file }),
    "utf-8"
  );
}

toJSON();
