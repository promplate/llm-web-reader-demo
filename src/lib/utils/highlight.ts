import type { BundledLanguage } from "shiki"

import { cached } from "./cache"
import { createHighlighter } from "shiki"

export const getHighlighter = cached(async (lang: BundledLanguage) => {
  const highlighter = await createHighlighter({ themes: ["vesper"], langs: [lang] })
  return cached((code: string) => {
    return highlighter.codeToHtml(code, { lang, theme: "vesper" })
  })
})
