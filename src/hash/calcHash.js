import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const hash = crypto.createHash("sha256");

  const readibleStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt"),
    {
      encoding: "utf-8",
    }
  );

  readibleStream.on("data", (chunk) => hash.update(chunk));

  readibleStream.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();
