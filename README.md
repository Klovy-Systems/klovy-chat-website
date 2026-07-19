#  Klovy Chat — Website

Oficjalna strona komunikatora **Klovy Chat** platformy **Klovy Systems** — zbudowana w Next.js z TypeScript i Tailwind CSS.

---

##  O projekcie

Klovy Chat Website to główna strona internetowa komunikatora Klovy Chat. Prezentuje funkcje produktu, aktualności oraz informacje dla użytkowników i potencjalnych klientów platformy Klovy Systems.

---

##  Uruchomienie lokalne

### Wymagania

- **Node.js** >= 18.x
- **npm** >= 9.x

### Instalacja

```bash
# Sklonuj repozytorium
git clone https://github.com/klovy-systems/klovy-chat-website.git
cd klovy-chat-website

# Zainstaluj zależności
npm install
```

### Konfiguracja środowiska

Utwórz plik `.env.local` na podstawie `.env.example` i uzupełnij token bota Discord:

```bash
cp .env.example .env.local
```

Przykład:

```env
DISCORD_BOT_TOKEN=your_discord_bot_token_here
```

### Uruchomienie serwera deweloperskiego

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce, aby zobaczyć wynik.

### Budowanie produkcyjne

```bash
npm run build
npm run start
```

---

##  Technologie

- **Next.js** — framework React z SSR i SSG
- **TypeScript** — typowany JavaScript dla większej niezawodności kodu
- **Tailwind CSS** — utility-first styling
- **next/font** — automatyczna optymalizacja fontu **Geist**
- **i18n** — obsługa wielu języków

---

##  Struktura projektu

```
klovy-chat-website/
├── app/                     # App Router (strony i layouty)
├── components/              # Komponenty UI
├── content/
│   └── blog/                # Treści bloga (MDX / Markdown)
├── contexts/                # React Context (stan globalny)
├── i18n/                    # Pliki tłumaczeń
├── lib/                     # Helpery i funkcje narzędziowe
├── public/                  # Statyczne zasoby (obrazy, ikony)
├── next.config.ts           # Konfiguracja Next.js
├── tailwind.config.js       # Konfiguracja Tailwind CSS
├── tsconfig.json            # Konfiguracja TypeScript
└── package.json
```

---

##  Contributing

Repozytorium jest prywatne. Zmiany wprowadzamy przez program Github Desktop.


##  Licencja

Prywatne repozytorium. © Klovy Systems. Wszelkie prawa zastrzeżone. Nieautoryzowane kopiowanie, dystrybucja lub wykorzystanie kodu jest zabronione. Wszelkie prawa należą do właściciela projektu Klovy Systems Jakuba Maksymowicza (Klovy).

## Pomoc przy stronie

ogzeyh
