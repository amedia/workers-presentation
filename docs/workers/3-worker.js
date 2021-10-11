globalThis.addEventListener("message", (e) => {
  globalThis.postMessage(e.data);
});
