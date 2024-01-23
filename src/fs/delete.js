import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fileToRemove.txt");

  try {
    await fsp.unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
