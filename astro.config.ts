import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://uzmoi.github.io/",
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
});
