const message =
  typeof window === "undefined" ? "Worker er lastet" : "Fremdeles en tråd";

globalThis.postMessage(message);
