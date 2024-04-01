import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";

const __dirname = process.cwd();

export function resolve(...paths: string[]) {
  return path.resolve(__dirname, ...paths);
}

export async function readFile(file: string) {
  return fs.readFile(file, "utf-8");
}
