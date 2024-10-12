import type { RequestHandler } from "./$types"

import { error, text } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ fetch, url: { searchParams } }) => {
  const url = searchParams.get("url")
  if (!url) {
    error(400)
  }

  const html = await fetch(url).then(res => res.text())

  return text(html)
}
