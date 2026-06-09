import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { classNames, resolveRelative } from "@quartz-community/utils"
import type { FullSlug } from "@quartz-community/utils"
import { h } from "preact"
const style = `.breadcrumb-container {
  margin: 0;
  margin-top: 0.75rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.breadcrumb-element {
  p {
    margin: 0;
    margin-left: 0.5rem;
    padding: 0;
    line-height: normal;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}`

type CrumbData = {
  displayName: string
  path: string
}

export interface BreadcrumbOptions {
  spacerSymbol: string
  rootName: string
  resolveFrontmatterTitle: boolean
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "\u276f",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  showCurrentPage: true,
}

export function pathToRoot(slug: string): string {
  let rootPath = slug
    .split("/")
    .filter((x) => x !== "")
    .slice(0, -1)
    .map(() => "..")
    .join("/")
  if (rootPath.length === 0) {
    rootPath = "."
  }

  return rootPath as string
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }
  const Breadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const slug = fileData.slug as string
    const ancestry: (typeof fileData)[] = []
    let parentSlug: string | undefined
    const parentFrontmatter = fileData.frontmatter?.parent

    if (typeof parentFrontmatter === "string") {
      const match = parentFrontmatter.match(/\[\[(.*?)\]\]/)
      parentSlug = match && match[1] ? match[1] : parentFrontmatter
    } else if (Array.isArray(parentFrontmatter) && parentFrontmatter.length > 0) {
      const parentLink = parentFrontmatter[0]
      const match = parentLink.match(/\[\[(.*?)\]\]/)
      parentSlug = match && match[1] ? match[1] : parentLink
    }

    while (parentSlug) {
      const parentFile = allFiles.find(
        (f) =>
          f.slug === parentSlug ||
          f.frontmatter?.title === parentSlug ||
          (f.frontmatter?.aliases &&
            Array.isArray(f.frontmatter.aliases) &&
            f.frontmatter.aliases.includes(parentSlug as string)),
      )

      if (parentFile) {
        ancestry.unshift(parentFile as typeof fileData)
        const nextParentFrontmatter = parentFile.frontmatter?.parent
        if (typeof nextParentFrontmatter === "string") {
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

    for (let i = 0; i < allCrumbData.length; i++) {
      const page = allCrumbData[i]
      const isCurrentPage = i === allCrumbData.length - 1
      const crumb = {
        displayName: (page.frontmatter?.title as string) ?? page.slug?.split("/").pop() ?? "",
        path:
          isCurrentPage && options.showCurrentPage
            ? ""
            : resolveRelative(slug as FullSlug, page.slug as FullSlug),
      }
      crumbs.push(crumb)
    }

    return h(
      "nav",
      { class: classNames(displayClass, "breadcrumb-container"), "aria-label": "breadcrumbs" },
      crumbs.map((crumb, index) =>
        h(
          "div",
          { class: "breadcrumb-element" },
          h("a", { href: crumb.path }, crumb.displayName),
          index !== crumbs.length - 1 && h("p", null, ` ${options.spacerSymbol} `),
        ),
      ),
    )
  }
  Breadcrumbs.css = style

  return Breadcrumbs
}) satisfies QuartzComponentConstructor
