import test, { describe } from "node:test"
import assert from "node:assert"
import { FazuhTweaks } from "./plugin"
import type { VFile } from "vfile"
import type { Root } from "hast"

describe("FazuhTweaks", () => {
  const plugin = FazuhTweaks() as any

  function makeVFile(frontmatter: any, stem?: string): VFile {
    return {
      data: { frontmatter },
      stem: stem ?? "untitled",
    } as unknown as VFile
  }

  function getMdPlugin(): (tree: unknown, file: VFile) => void {
    return plugin.markdownPlugins(undefined)[0]()
  }

  function getHtmlPlugin(): (tree: Root) => void {
    return plugin.htmlPlugins(undefined)[0]()
  }

  describe("markdownPlugins - title aliasing", () => {
    test("rewrites title from aliases[0]", () => {
      const file = makeVFile({ title: "Original", aliases: ["Aliased Title"] })
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "Aliased Title")
    })

    test("rewrites title from single alias string", () => {
      const file = makeVFile({ title: "Original", alias: "Single Alias" })
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "Single Alias")
    })

    test("aliases[0] takes priority over alias string", () => {
      const file = makeVFile({
        title: "Original",
        aliases: ["First Alias"],
        alias: "Second Alias",
      })
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "First Alias")
    })

    test("strips .md extension from aliases", () => {
      const file = makeVFile({ title: "Original", aliases: ["Note Title.md"] })
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "Note Title")
    })

    test("falls back to title when no aliases", () => {
      const file = makeVFile({ title: "Original Title" })
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "Original Title")
    })

    test("skips when no frontmatter", () => {
      const file = makeVFile(undefined)
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter, undefined)
    })

    test("falls back to file.stem when no title or aliases", () => {
      const file = makeVFile({}, "filename-stem")
      getMdPlugin()(null, file)
      assert.equal(file.data.frontmatter.title, "filename-stem")
    })
  })

  describe("externalResources - embed h1 CSS", () => {
    test("includes CSS to hide h1 in transclude blockquotes", () => {
      const res = plugin.externalResources(undefined) as any
      const cssContent = res.css?.[0]?.content ?? ""
      assert.ok(cssContent.includes("blockquote.transclude > h1:first-child"))
      assert.ok(cssContent.includes("display: none"))
    })
  })

  describe("htmlPlugins - embed class", () => {
    test("adds .embed class to blockquote.transclude", () => {
      const tree: Root = {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "blockquote",
            properties: { className: ["transclude"] },
            children: [],
          },
        ],
      }

      getHtmlPlugin()(tree)

      const bq = tree.children[0] as any
      assert.ok(bq.properties.className.includes("embed"))
    })

    test("does not duplicate .embed class if already present", () => {
      const tree: Root = {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "blockquote",
            properties: { className: ["transclude", "embed"] },
            children: [],
          },
        ],
      }

      getHtmlPlugin()(tree)

      const bq = tree.children[0] as any
      const embedCount = bq.properties.className.filter((c: string) => c === "embed").length
      assert.equal(embedCount, 1)
    })

    test("does not affect non-transclude blockquotes", () => {
      const tree: Root = {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "blockquote",
            properties: { className: ["callout"] },
            children: [],
          },
        ],
      }

      getHtmlPlugin()(tree)

      const bq = tree.children[0] as any
      assert.ok(!bq.properties.className.includes("embed"))
    })
  })
})
