#!/usr/bin/env node

import fs from "fs";
import path from "path";

const slug = process.argv[2]?.trim();

if (!slug) {
  console.error("Użycie: npm run new-post -- nazwa-wpisu");
  console.error("Przykład: npm run new-post -- aktualizacja-beta");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("Slug może zawierać tylko małe litery, cyfry i myślniki.");
  process.exit(1);
}

const postDir = path.join("content", "blog", slug);

if (fs.existsSync(postDir)) {
  console.error(`Wpis "${slug}" już istnieje: ${postDir}`);
  process.exit(1);
}

fs.mkdirSync(postDir, { recursive: true });

const plTemplate = `---
title: "Tytuł wpisu"
description: "Krótki opis widoczny na liście bloga"
image: "/blog/${slug}.webp"
tags: ["Klovy Chat"]
readingTime: "5 min"
---

# Tytuł wpisu

Treść wpisu w Markdown...

## Nagłówek sekcji

- punkt listy
- kolejny punkt
`;

const enTemplate = `---
title: "Post title"
description: "Short description shown on the blog list"
image: "/blog/${slug}.webp"
tags: ["Klovy Chat"]
readingTime: "5 min"
---

# Post title

Post content in Markdown...

## Section heading

- list item
- another item
`;

fs.writeFileSync(path.join(postDir, "pl.md"), plTemplate, "utf-8");
fs.writeFileSync(path.join(postDir, "en.md"), enTemplate, "utf-8");

console.log(`Utworzono wpis: content/blog/${slug}/`);
console.log("  - pl.md");
console.log("  - en.md");
console.log("");
console.log("Następne kroki:");
console.log(`  1. Edytuj pliki w content/blog/${slug}/`);
console.log(`  2. (Opcjonalnie) dodaj obrazek do public/blog/${slug}.webp`);
console.log("  3. Wypchnij zmiany na GitHub — Cloudflare zbuduje stronę automatycznie");
