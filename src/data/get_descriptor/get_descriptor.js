// get the descriptor of the flow property "Mass" by name
const mass = await call("data/get/descriptor", {
  "@type": "FlowProperty",
  name: "Mass",
});
console.log(mass);

// the same descriptor, now requested by ID
const byId = await call("data/get/descriptor", {
  "@type": "FlowProperty",
  "@id": mass["@id"],
});
console.log(byId.name);
