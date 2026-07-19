# Blog — jak dodać wpis

Każdy wpis to folder w `content/blog/` z dwoma plikami Markdown: `pl.md` i `en.md`.

## Szybki start

```bash
npm run new-post -- nazwa-wpisu
```

Przykład:

```bash
npm run new-post -- aktualizacja-beta
```

To utworzy:

```
content/blog/aktualizacja-beta/
├── pl.md
└── en.md
```

## Ręczne dodawanie

1. Utwórz folder `content/blog/twoj-slug/`
2. Dodaj `pl.md` i `en.md` z frontmatter na górze pliku
3. Slug = nazwa folderu → URL: `/blog/twoj-slug`

## Frontmatter (nagłówek pliku)

```yaml
---
title: "Tytuł wpisu"
description: "Opis na liście bloga"
image: "/blog/twoj-slug.webp"
tags: ["Klovy Chat", "Aktualizacja"]
readingTime: "5 min"
---
```

Poniżej frontmatter pisz treść w Markdown.

## Obrazek

Opcjonalnie dodaj miniaturę do `public/blog/twoj-slug.webp` i ustaw `image` w frontmatter.

## Publikacja

Po zapisaniu plików wypchnij zmiany na GitHub. Cloudflare zbuduje stronę ponownie i nowy wpis pojawi się na klovy.chat/blog.

> Wpisy są wczytywane przy buildzie — po dodaniu pliku `.md` potrzebny jest redeploy (automatyczny po pushu).
