import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import pandacss from "@pandacss/astro";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), pandacss()],
});
