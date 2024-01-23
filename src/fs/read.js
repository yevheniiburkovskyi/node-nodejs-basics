import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";
import fs from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.join(__dirname, "files/fileToRead.txt");

  try {
    const filesData = await fsp.readFile(folderPath, "utf-8");
    console.log(filesData);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
