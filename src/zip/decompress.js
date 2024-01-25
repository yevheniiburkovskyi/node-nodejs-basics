import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

import { pipeline } from "stream";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const targetPath = path.join(__dirname, "files", "fileToCompress.txt");

  const gzip = createGunzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(targetPath);

  source.pipe(gzip).pipe(destination);
};

await decompress();
