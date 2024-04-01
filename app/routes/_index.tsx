// TODO: Should be a main page

import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/resume");
}

export default function Index() {
  return <h1>Hello Remix!</h1>;
}
