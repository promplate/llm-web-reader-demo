import { cached } from "./cache"

export const getBody = cached((htmlString: string) => {
  return new Promise<string>(resolve => {
    const iframe = document.createElement("iframe")
    iframe.onload = () => {
      const bodyContent = iframe.contentDocument?.body
      const result = bodyContent?.outerHTML ?? htmlString
      resolve(result.trim())
      iframe.remove()
    }
    iframe.style.display = "none"
    iframe.srcdoc = htmlString
    document.body.appendChild(iframe)
  })
},
)
