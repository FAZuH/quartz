import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const aliases = fileData.frontmatter?.aliases
  const alias = fileData.frontmatter?.alias

  let displayTitle = title

  if (aliases && Array.isArray(aliases) && aliases.length > 0) {
    displayTitle = aliases[0]
  } else if (alias && typeof alias === 'string') {
    displayTitle = alias
  }

  if (displayTitle && displayTitle.endsWith('.md')) {
    displayTitle = displayTitle.slice(0, -3)
  }

  if (displayTitle) {
    return <h1 class={classNames(displayClass, "article-title")}>{displayTitle}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
