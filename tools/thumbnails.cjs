// Takes a small picture of each note's first sketch, for the cards in the garden (home page).
// Run it after adding a note or changing its first sketch, then commit assets/thumbs/:
//
//   node build.mjs
//   npx --yes playwright@1.61.1 install chromium   # once
//   NODE_PATH="$(npm root -g)" node tools/thumbnails.cjs   (with playwright installed globally)
//
// Only notes without a picture are taken; pass --all to retake every one.

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const SITE = path.join(ROOT, "_site", "index.html");
const OUT = path.join(ROOT, "assets", "thumbs");
const retakeAll = process.argv.includes("--all");

const sketches = [];
const notesDir = path.join(ROOT, "content", "notes");
for (const tool of fs.readdirSync(notesDir)) {
  for (const file of fs.readdirSync(path.join(notesDir, tool)).filter((f) => f.endsWith(".md"))) {
    const text = fs.readFileSync(path.join(notesDir, tool, file), "utf8");
    const code = (text.match(/^```hydra\s*\n([\s\S]*?)\n```/m) || [])[1];
    const out = path.join(OUT, `${tool}-${path.basename(file, ".md")}.jpg`);
    if (code && (retakeAll || !fs.existsSync(out))) sketches.push({ code, out });
  }
}

(async () => {
  if (!fs.existsSync(SITE)) throw new Error("Run `node build.mjs` first.");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const page = await browser.newPage({ viewport: { width: 480, height: 300 } });
  await page.goto("file://" + SITE, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: ".shell { display: none !important; }" });
  for (const { code, out } of sketches) {
    await page.evaluate((code) => { hush(); render(o0); (0, eval)(code); }, code);
    await page.waitForTimeout(1500);
    await page.locator("#hydra-canvas").screenshot({ path: out, type: "jpeg", quality: 82 });
    console.log("took", path.relative(ROOT, out));
  }
  await browser.close();
  console.log(sketches.length ? "Done." : "Every note already has a picture (use --all to retake).");
})();
