import { supportModuleWorkers } from "./feature-detect.js";

let worker;
if (supportModuleWorkers()) {
  worker = new Worker("./3-worker.js", { type: "module" });
} else {
  worker = window;
  document.body.appendChild(
    document
      .createRange()
      .createContextualFragment(
        '<script type="module" src="./3-worker.js"></script>'
      )
  );
}

const shared = new SharedArrayBuffer(100);
const typedArr = new Int8Array(shared);

worker.postMessage(typedArr);

worker.addEventListener("message", (e) => {
  const decoder = new TextDecoder();
  const result = new Int8Array(typedArr);
  const message = decoder.decode(result);
  document.body.insertAdjacentHTML("beforeend", message);
});
