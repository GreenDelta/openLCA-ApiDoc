// You can change the type here, e.g. to Flow; but note that
// this will try to print all flows of the database below (!).
// So better test this with types like UnitGroup, ImpactMethod,
// ImpactCategory, ...
const descriptors = await call("data/get/descriptors", {
  "@type": "FlowProperty"
});
console.log(descriptors);
