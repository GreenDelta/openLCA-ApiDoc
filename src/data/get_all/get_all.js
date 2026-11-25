const v = await call("data/get/all", {
  "@type": "UnitGroup"
});
console.log(v);
// [
//   {
//     "@type": "UnitGroup",
//     "@id": "838aaa21-0117-11db-92e3-0800200c9a66",
//     name: "Units of mass*length",
//     category: "Technical unit groups",
//     version: "00.00.000",
//     defaultFlowProperty: {
