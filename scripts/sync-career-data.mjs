import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const careerOutput = path.resolve(root, "../_career_data/outputs");
const portfolioOutput = path.join(careerOutput, "portfolio-html");
const sourceData = path.join(portfolioOutput, "portfolio-data.js");
const sourceAssets = path.join(portfolioOutput, "assets");
const sourceResume = path.join(careerOutput, "resume-html/patrick-zhu-resume.pdf");
const targetData = path.join(root, "src/data/projects.json");
const targetAssets = path.join(root, "public/images/projects");
const targetResume = path.join(root, "public/files/patrick-zhu-resume-zh.pdf");

const context = { window: {} };
vm.runInNewContext(await fs.readFile(sourceData, "utf8"), context, { filename: sourceData });
await fs.writeFile(targetData, `${JSON.stringify(context.window.PORTFOLIO_DATA, null, 2)}\n`);
await fs.rm(targetAssets, { recursive: true, force: true });
await fs.cp(sourceAssets, targetAssets, {
  recursive: true,
  filter: (source) => !source.split(path.sep).includes("sources")
});
await fs.copyFile(sourceResume, targetResume);

console.log("Career data, public project images, and Chinese resume PDF synced.");
