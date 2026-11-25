// this example tries to find a process with this name
// and builds a product system from it
const processName = "grape production | grape | Cutoff, U";

const processes = await call("data/get/descriptors", { "@type": "Process" });
const process = processes.find((d) => d.name === processName);
if (!process) {
  throw new Error(`Could not find process: ${processName}`);
}

const system = await call("data/create/system", {
  process: { "@type": "Process", "@id": process["@id"] },
  config: {
    preferUnitProcesses: true,
    providerLinking: "PREFER_DEFAULTS",
  },
});
console.log(`created product system ${system.name}, id=${system["@id"]}`);
