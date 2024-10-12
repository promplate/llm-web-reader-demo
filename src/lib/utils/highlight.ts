import { cached } from "./cache"
import { type BundledLanguage, createHighlighter } from "shiki"

export const getHighlighter = cached(async (lang: BundledLanguage) => {
  const highlighter = await createHighlighter({ themes: ["vesper"], langs: [lang] })
  return cached((code: string) => {
    return highlighter.codeToHtml(code, { lang, theme: "vesper" })
  })
})
