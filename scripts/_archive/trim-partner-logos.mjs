/**
 * Trims whitespace/transparent edges from all partner logos in public/partners.
 * Run: node scripts/trim-partner-logos.mjs
 */
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PARTNERS_DIR = join(__dirname, "..", "public", "partners");

async function trimLogo(filePath) {
  const input = join(PARTNERS_DIR, filePath);
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return;
  try {
    let pipeline = sharp(input).trim({ threshold: 20 });
    const { writeFile } = await import("fs/promises");
    let buffer;
    if (ext === ".png") {
      buffer = await pipeline.png().toBuffer();
    } else if (ext === ".jpg" || ext === ".jpeg") {
      buffer = await pipeline.jpeg({ quality: 95 }).toBuffer();
    } else {
      buffer = await pipeline.webp({ quality: 95 }).toBuffer();
    }
    await writeFile(input, buffer);
    console.log(`Trimmed: ${filePath}`);
  } catch (err) {
    console.warn(`Skip ${filePath}:`, err.message);
  }
}

async function main() {
  const files = await readdir(PARTNERS_DIR);
  for (const f of files) {
    if (f.endsWith("-trimmed.png")) continue;
    await trimLogo(f);
  }
  console.log("Done.");
}

main();
