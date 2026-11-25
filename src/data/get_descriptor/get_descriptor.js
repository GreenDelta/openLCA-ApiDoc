const v = await call("data/get/descriptor", {
  "@type": "Process",
  "@id": "eacc4872-6f4e-4ff1-946e-c1bddeda24be",
});
console.log(v);
// {
//   "@type": "Process",
//   "@id": "eacc4872-6f4e-4ff1-946e-c1bddeda24be",
//   name: "blast furnace gas, Recycled Content cut-off",
//   processType: "LCI_RESULT",
//   flowType: "PRODUCT_FLOW"
// }
