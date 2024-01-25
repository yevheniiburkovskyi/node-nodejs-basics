import { fileURLToPath } from "url";
import path from "path";
import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const workerPath = path.join(__dirname, "worker.js");
  const numberOfWorkers = os.cpus().length;

  const results = [];

  for (let i = 0; i < numberOfWorkers; i++) {
    const worker = new Worker(workerPath);

    worker.postMessage(i + 10);

    worker.on("message", (message) => {
      results[i] = message;
      if (results.filter((result) => result).length === numberOfWorkers) {
        console.log(results);

        process.exit();
      }
    });
  }
};

await performCalculations();
