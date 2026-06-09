import test, { describe } from "node:test"
import assert from "node:assert"
import { pathToRoot } from "./Breadcrumbs"

describe("custom-breadcrumbs", () => {
  describe("pathToRoot", () => {
    test("returns '.' for top-level slug", () => {
      assert.equal(pathToRoot("index"), ".")
      assert.equal(pathToRoot("root"), ".")
    })

    test("returns '..' for one level deep", () => {
      assert.equal(pathToRoot("folder/page"), "..")
    })

    test("returns '../..' for two levels deep", () => {
      assert.equal(pathToRoot("a/b/page"), "../..")
    })

    test("returns '../../..' for three levels deep", () => {
      assert.equal(pathToRoot("x/y/z/page"), "../../..")
    })

    test("handles trailing slash", () => {
      assert.equal(pathToRoot("folder/page/"), "..")
    })
  })
})
