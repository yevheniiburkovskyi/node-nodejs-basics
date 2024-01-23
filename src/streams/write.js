import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const writebleStream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt"),
    {
      encoding: "utf-8",
    }
  );

  process.stdin.pipe(writebleStream);
};

await write();
