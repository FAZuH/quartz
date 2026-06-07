import { QuartzTransformerPlugin } from "../../types"
import { Root } from "hast"
import { VFile } from "vfile"
import { visit } from "unist-util-visit"

export const FazuhTweaks: QuartzTransformerPlugin = () => {
  return {
    name: "FazuhTweaks",
    markdownPlugins() {
      return [
        () => {
          return (_: unknown, file: VFile) => {
            if (!file.data.frontmatter) return

            const fm = file.data.frontmatter
            const aliases = fm.aliases
            const alias = fm.alias

            let displayTitle = fm.title ?? file.stem ?? "Untitled"

            if (aliases && Array.isArray(aliases) && aliases.length > 0) {
              displayTitle = aliases[0]
            } else if (alias && typeof alias === "string") {
              displayTitle = alias
            }

            if (displayTitle.endsWith(".md")) {
              displayTitle = displayTitle.slice(0, -3)
            }

            fm.title = displayTitle
          }
        },
      ]
    },
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "element", (node: any) => {
              if (
                node.tagName === "blockquote" &&
                node.properties?.className?.includes("transclude")
              ) {
                if (!node.properties.className.includes("embed")) {
                  node.properties.className.push("embed")
                }
              }
            })
          }
        },
      ]
    },
    externalResources() {
      return {
        js: [
          {
            script: `
              document.addEventListener("keydown", (e) => {
                if (e.key === "/" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  const searchBtn = document.getElementById("search-button");
                  if (searchBtn) searchBtn.click();
                }
              });
            `,
            loadTime: "afterDOMReady",
            contentType: "inline",
          },
        ],
      }
    },
  }
}
