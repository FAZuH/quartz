import manifestJson from "./package.json" with { type: "json" }

export const manifest = manifestJson.quartz
export { default as Breadcrumbs } from "./components/Breadcrumbs"
