import { QuartzPluginData } from "../plugins/vfile"

export function getTitle(page: QuartzPluginData): string {
  const aliases = page.frontmatter?.aliases
  const alias = page.frontmatter?.alias
  let displayTitle = page.frontmatter?.title ?? page.slug!.split("/").pop()!

  if (aliases && Array.isArray(aliases) && aliases.length > 0) {
    displayTitle = aliases[0]
  } else if (alias && typeof alias === 'string') {
    displayTitle = alias
  }

  if (displayTitle.endsWith('.md')) {
    displayTitle = displayTitle.slice(0, -3)
  }

  return displayTitle
}
