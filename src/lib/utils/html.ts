import { cached } from "./cache"

export const getBody = cached((htmlString: string) => {
  const dom = new DOMParser().parseFromString(htmlString, "text/html")
  return dom.body.innerHTML
})
