import extractorSvelte from "@unocss/extractor-svelte"
import { defineConfig, presetIcons, presetTypography, presetWind3, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss"

const config = defineConfig({
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetWind3({ preflight: "on-demand" }), presetWebFonts({ provider: "bunny", fonts: { mono: { name: "JetBrains Mono Variable", provider: "none" } } }), presetIcons(), presetTypography()],
  shortcuts: {
    center: "flex justify-center items-center",
  },
})

export default config
