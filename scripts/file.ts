import { format } from "date-fns/format";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";
import * as readline from "node:readline/promises";

export async function createMDX() {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const titleInput = await input.question(
    "Title of the file you want to create below.\n>>> "
  );
  if (!titleInput) {
    console.log("Invalid title");
    input.close();
    return;
  }
  const idInput = await input.question(
    "Input id of the file, (able to skip)\n>>> "
  );
  const idRegexp = /[^A-Za-z0-9가-힣ㄱ-ㅎ]/;
  let id = "";
  if (!idInput) {
    id = titleInput.toLowerCase().split(idRegexp).join("-");
  } else {
    id = idInput.toLowerCase().split(idRegexp).join("-");
  }
  const createdAt = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss+00:00");
  const md = `---
id: "${id}"
title: "${titleInput}"
description: ""
image: ""
backgroundImage: ""
createdAt: "${createdAt}"
updatedAt: ""
draft: false
---`;
  await fs.writeFile(
    path.resolve("./app/data/blogs/", id + ".mdx"),
    md,
    "utf-8"
  );
  input.close();
}

createMDX();
