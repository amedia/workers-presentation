import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";

class login extends HTMLElement {
  constructor() {
    super();
    const worker = new SharedWorker("./4-worker.js");
    this.user = Comlink.wrap(worker.port);
    this.user.onLogin(
      Comlink.proxy((data) => {
        if (data.loggedIn) {
          this.innerHTML = data.name;
          return;
        }
        this.innerHTML = "Logg inn";
      })
    );
  }
  connectedCallback() {
    this.addEventListener("click", () => {
      this.user.login();
    });
  }
}

customElements.define("amedia-login", login);
