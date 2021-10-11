export function supportModuleWorkers() {
  let supports = false;
  const trap = {
    get type() {
      supports = true;
    },
  };
  try {
    new Worker("blob://", trap).terminate();
  } finally {
    return supports;
  }
}
