import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";
import fs from "fs";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  const isFileExists = fs.existsSync(destinationPath);

  if (isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fsp.cp(sourcePath, destinationPath, { recursive: true });
  } catch (error) {
    console.error(error);
  }
};

await copy();
