const descriptors = await call("data/get/descriptors", {
  "@type": "FlowProperty"
});
console.log(descriptors);
// [
//   {
//     "@type": "FlowProperty",
//     "@id": "838aaa20-0117-11db-92e3-0800200c9a66",
//     name: "Goods transport (mass*distance)",
//     category: "Technical flow properties",
//     refUnit: "t*km"
//   },
