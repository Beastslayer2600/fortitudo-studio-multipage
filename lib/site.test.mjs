import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { SITE_URL } from "./site.ts";
import { ARTICLES, articlePath } from "../content/articles.ts";

const root = new URL("../", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");

test("the .site redirect points at SITE_URL in one hop", () => {
  const config = read("next.config.mjs");
  const match = config.match(/value: "fortitudostudios\.site" \}\],\s*destination: "([^"]+)"/);
  assert.ok(match, "redirect for fortitudostudios.site not found");
  assert.equal(match[1], `${SITE_URL}/:path*`);
});

test("no hard-coded origin outside lib/site.ts", () => {
  const offenders = [];
  const walk = (dir) => {
    for (const entry of readdirSync(new URL(dir, root), { withFileTypes: true })) {
      const p = `${dir}${entry.name}`;
      if (entry.isDirectory()) walk(`${p}/`);
      else if (/\.(ts|tsx)$/.test(entry.name) && /https:\/\/(www\.)?fortitudostudios\.com/.test(read(p)))
        offenders.push(p);
    }
  };
  ["app/", "components/", "content/"].forEach(walk);
  assert.deepEqual(offenders, []);
});

test("every guide and insight page has a registry entry, and vice versa", () => {
  const onDisk = [];
  for (const [section, dir] of [["guides", "app/(site)/guides/"], ["insights", "app/(site)/insights/"]]) {
    for (const entry of readdirSync(new URL(dir, root), { withFileTypes: true })) {
      if (entry.isDirectory() && existsSync(new URL(`${dir}${entry.name}/page.tsx`, root)))
        onDisk.push(`/${section}/${entry.name}`);
    }
  }
  const registered = ARTICLES.map(articlePath);
  assert.deepEqual([...onDisk].sort(), [...registered].sort());
});

test("every registry page renders ArticleMeta and reads its own metadata", () => {
  for (const a of ARTICLES) {
    const path = articlePath(a);
    const src = read(`app/(site)/${path.slice(1)}/page.tsx`);
    assert.ok(src.includes("<ArticleMeta"), `${path} is missing <ArticleMeta>`);
    assert.ok(src.includes("articleMetadata("), `${path} is not using articleMetadata()`);
  }
});

test("registry titles and descriptions are unique, dates are valid", () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const a of ARTICLES) {
    assert.ok(!titles.has(a.title), `duplicate title: ${a.title}`);
    assert.ok(!descriptions.has(a.description), `duplicate description: ${a.slug}`);
    titles.add(a.title);
    descriptions.add(a.description);
    assert.match(a.published, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(a.updated >= a.published, `${a.slug}: updated before published`);
    assert.ok(!a.title.endsWith("| Gert Fourie"), `${a.slug}: title must not include the suffix`);
  }
});
