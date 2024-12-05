import { Readability } from "@mozilla/readability"

export function read(html: string, baseurl: string) {
  const doc = new DOMParser().parseFromString(html, "text/html")
  const base = document.createElement("base")
  base.href = baseurl
  doc.head.appendChild(base)
  return new Readability(doc).parse()?.content
}
