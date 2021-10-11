const encoder = new TextEncoder();
globalThis.addEventListener("message", (e) => {
  const arr = e.data;
  const stringArr = encoder.encode("Hei fra worker");
  stringArr.forEach((val, i) => (arr[i] = val));
  globalThis.postMessage(true);
});
