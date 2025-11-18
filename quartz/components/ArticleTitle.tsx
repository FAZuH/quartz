import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { getTitle } from "../util/title"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = getTitle(fileData)
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
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
