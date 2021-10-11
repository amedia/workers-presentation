import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";

async function main() {
  const worker = new Worker("./2-worker.js");

  const MyClass = Comlink.wrap(worker);

  const myClass = await new MyClass();

  const message = await myClass.someMethod();
  document.body.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
}

main();
