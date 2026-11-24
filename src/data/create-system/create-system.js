// this example tries to find a process with this name
// and builds a product system from it
const processName = "grape production | grape | Cutoff, U";

(async () => {

  // a small helper for the JSON-RPC calls
  async function call(method, params) {
    const resp = await fetch("http://localhost:8080", {
      method: "POST",
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    });
    const r = await resp.json();
    if (r.error) {
      throw new Error(r.error.message);
    }
    return r.result;
  }

  const processes = await call("data/get/descriptors", { "@type": "Process" });
  const process = processes.find((d) => d.name === processName);
  if (!process) {
    console.log(`Could not find process: ${processName}`);
    return;
  }

  const system = await call("data/create/system", {
    process: { "@type": "Process", "@id": process["@id"] },
    config: {
      preferUnitProcesses: true,
      providerLinking: "PREFER_DEFAULTS",
    },
  });
  console.log(`created product system ${system.name}, id=${system["@id"]}`);
})();
