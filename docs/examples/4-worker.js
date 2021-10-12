importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const listeners = [];
let loggedIn = false;
const user = {
  login: () => {
    loggedIn = !loggedIn;
    listeners.forEach((cb) => cb({ loggedIn, name: "Tor Brekke Skjøtskift" }));
  },
  onLogin: (cb) => listeners.push(cb),
};

globalThis.onconnect = function (event) {
  const port = event.ports[0];
  Comlink.expose(user, port);
};
