import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { Transform } from "stream";

const transform = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      this.push(reversedChunk);
      callback();
    }
  }

  const reverseTransform = new ReverseTransform();

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
