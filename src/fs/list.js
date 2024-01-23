import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";
import fs from "fs";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.join(__dirname, "files");

  const isFileExists = fs.existsSync(folderPath);

  if (!isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    const filesData = await fsp.readdir(folderPath);
    filesData.map((file) => console.log(path.join(folderPath, file)));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
