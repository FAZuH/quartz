import manifestJson from "./package.json" with { type: "json" }
import { FazuhTweaks } from "./plugin.ts"

export const manifest = manifestJson.quartz
export { FazuhTweaks }
export default FazuhTweaks
