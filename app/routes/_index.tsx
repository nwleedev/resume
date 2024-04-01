// TODO: Should be a main page

import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/resume");
}
