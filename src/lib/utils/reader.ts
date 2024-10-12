import { Readability } from "@mozilla/readability"

export function read(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html")
  return new Readability(doc).parse()?.content
}
