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
worker.postMessage(data);
worker.addEventListener("message", (e) => {
  const { data, origin } = e;
  if (origin === window) {
    return;
  }
  if (shared === data) {
    document.body.insertAdjacentHTML("beforeend", `<p>Shared memory</p>`);
  }
});
