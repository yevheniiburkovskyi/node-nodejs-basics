import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readibleStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    {
      encoding: "utf-8",
    }
  );

  readibleStream.pipe(process.stdout);
};

await read();
