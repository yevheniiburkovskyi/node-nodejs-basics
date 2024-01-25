import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

import { pipeline } from "stream";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const targetPath = path.join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(targetPath);

  source.pipe(gzip).pipe(destination);
};

await compress();
