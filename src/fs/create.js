import path from "path";
import { fileURLToPath } from "url";
import fsp from "fs/promises";
import fs from "fs";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fresh.txt");

  const isFileExists = fs.existsSync(filePath);

  if (isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fsp.writeFile(filePath, "I am fresh and young");
    console.log("File created successfully");
  } catch (writeError) {
    console.error("Error writing to file:", writeError);
  }
};

await create();
