import TurndownService from "turndown"
// @ts-expect-error Missing types
import { gfm } from "turndown-plugin-gfm"

const turndownService = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" }).use(gfm)

export const toMarkdown = turndownService.turndown.bind(turndownService)
