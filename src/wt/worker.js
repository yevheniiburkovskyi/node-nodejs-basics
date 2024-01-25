import { parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
  parentPort.postMessage(result);
  // This function sends result of nthFibonacci computations to main thread
};

parentPort.on("message", (data) => {
  const res = nthFibonacci(data);
  sendResult({ status: "resolved", data: res });
});

parentPort.on("messageerror", () => {
  sendResult({ status: "error", data: null });
});

sendResult();
