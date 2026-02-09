import { buildSync } from "esbuild";

buildSync({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    treeShaking: true,
    outdir: "dist"
});