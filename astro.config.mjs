import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
