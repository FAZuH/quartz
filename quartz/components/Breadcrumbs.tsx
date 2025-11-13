import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import breadcrumbsStyle from "./styles/breadcrumbs.scss"
import { FullSlug, resolveRelative, pathToRoot } from "../util/path"
import { classNames } from "../util/lang"
import { getTitle } from "../util/title"

type CrumbData = {
  displayName: string
  path: string
}

interface BreadcrumbOptions {
  /**
   * Symbol between crumbs
   */
  spacerSymbol: string
  /**
   * Name of first crumb
   */
  rootName: string
  /**
   * Whether to look up frontmatter title for folders (could cause performance problems with big vaults)
   */
  resolveFrontmatterTitle: boolean
  /**
   * Whether to display the current page in the breadcrumbs.
   */
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  showCurrentPage: true,
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }
  const Breadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const slug = fileData.slug!
    const ancestry: (typeof fileData)[] = []
    let parentSlug: string | undefined
    const parentFrontmatter = fileData.frontmatter?.parent
    if (typeof parentFrontmatter === 'string') {
      const match = parentFrontmatter.match(/\[\[(.*?)\]\]/)
      parentSlug = match && match[1] ? match[1] : parentFrontmatter
    } else if (Array.isArray(parentFrontmatter) && parentFrontmatter.length > 0) {
      const parentLink = parentFrontmatter[0]
      const match = parentLink.match(/\[\[(.*?)\]\]/)
      parentSlug = match && match[1] ? match[1] : parentLink
    }
    while (parentSlug) {
      const parentFile = allFiles.find((f) =>
        f.slug === parentSlug ||
        f.frontmatter?.title === parentSlug ||
        (f.frontmatter?.aliases && Array.isArray(f.frontmatter.aliases) && f.frontmatter.aliases.includes(parentSlug as string))
      )
      if (parentFile) {
        ancestry.unshift(parentFile)
        const nextParentFrontmatter = parentFile.frontmatter?.parent
        if (typeof nextParentFrontmatter === 'string') {
          const match = nextParentFrontmatter.match(/\[\[(.*?)\]\]/)
          parentSlug = match && match[1] ? match[1] : nextParentFrontmatter
        } else if (Array.isArray(nextParentFrontmatter) && nextParentFrontmatter.length > 0) {
          const parentLink = nextParentFrontmatter[0]
          const match = parentLink.match(/\[\[(.*?)\]\]/)
          parentSlug = match && match[1] ? match[1] : parentLink
        } else {
          parentSlug = undefined
        }
      } else {
        parentSlug = undefined
      }
    }

    const crumbs: CrumbData[] = [
      {
        displayName: options.rootName,
        path: pathToRoot(slug),
      },
    ]

    const allCrumbData = [...ancestry]
    if (options.showCurrentPage) {
      allCrumbData.push(fileData)
    }

    for (const [i, page] of allCrumbData.entries()) {
      const isCurrentPage = i === allCrumbData.length - 1
      const crumb = {
        displayName: getTitle(page),
        path: isCurrentPage && options.showCurrentPage ? "" : resolveRelative(slug, page.slug as FullSlug),
      }
      crumbs.push(crumb)
    }

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <div class="breadcrumb-element">
            <a href={crumb.path}>{crumb.displayName}</a>
            {index !== crumbs.length - 1 && <p>{` ${options.spacerSymbol} `}</p>}
          </div>
        ))}
      </nav>
    )
  }
  Breadcrumbs.css = breadcrumbsStyle

  return Breadcrumbs
}) satisfies QuartzComponentConstructor
