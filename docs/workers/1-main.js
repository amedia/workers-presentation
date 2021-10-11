import { supportModuleWorkers } from "./feature-detect.js";

let worker;
if (supportModuleWorkers()) {
  worker = new Worker("./1-worker.js", { type: "module" });
} else {
  worker = window;
  document.body.appendChild(
    document
      .createRange()
      .createContextualFragment(
        '<script type="module" src="./1-worker.js"></script>'
      )
  );
}

worker.addEventListener("message", (e) => {
  const { data, origin } = e;
  if (origin === window) {
    return;
  }
  document.body.insertAdjacentHTML("beforeend", `<p>${data}</p>`);
});
