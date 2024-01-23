import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";
import fs from "fs";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files/wrongFilename.txt");
  const destinationPath = path.join(__dirname, "files/properFilename.md");

  const isFileExists = fs.existsSync(destinationPath);

  if (isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fsp.rename(sourcePath, destinationPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
