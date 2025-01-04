import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import schema from "./schemas/schema";

export default defineConfig({
  title: "rajdip14_portfolio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schema,
  },
});