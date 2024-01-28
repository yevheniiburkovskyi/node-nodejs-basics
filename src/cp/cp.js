import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fork(path.resolve(__dirname, "files", "script.js"), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello world"]);
