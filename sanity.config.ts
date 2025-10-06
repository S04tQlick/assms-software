import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import schemas from "@/lib/sanity/config";

const config=  defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_VERSION,
    basePath: process.env.NEXT_PUBLIC_SANITY_PROJECT_BASE_PATH,
    plugins: [structureTool()],
    schema: { types: schemas },
    useCdn: false,
})

export default config;