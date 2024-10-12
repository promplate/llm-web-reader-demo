import TurndownService from "turndown"

const turndownService = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" })

export const toMarkdown = turndownService.turndown.bind(turndownService)
