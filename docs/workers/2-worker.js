importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

class MyClass {
  someMethod() {
    return "worker method is invoked";
  }
}

Comlink.expose(MyClass);
