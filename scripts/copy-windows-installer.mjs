import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(__dirname, "..");
const appRoot = resolve(websiteRoot, "..", "klovy-chat-application");

const source = join(
  appRoot,
  "src-tauri",
  "target",
  "release",
  "bundle",
  "nsis",
  "Klovy Chat_1.0.0_x64-setup.exe",
);

const destinationDir = join(websiteRoot, "public", "downloads");
const destination = join(destinationDir, "Klovy-Chat-1.0.0-windows-x64-setup.exe");

if (!existsSync(source)) {
  console.error(
    "Nie znaleziono instalatora Windows. Najpierw zbuduj aplikację:\n" +
      "  cd klovy-chat-application && npm run build",
  );
  process.exit(1);
}

mkdirSync(destinationDir, { recursive: true });
copyFileSync(source, destination);

console.log(`Skopiowano instalator Windows do:\n  ${destination}`);
