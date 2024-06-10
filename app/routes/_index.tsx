// TODO: Should be a main page

import { redirect } from "@remix-run/cloudflare";

export async function loader() {
  return redirect("/resume");
}

export default function Index() {
  return <h1 className=" justify-between">Hello Remix!</h1>;
}
