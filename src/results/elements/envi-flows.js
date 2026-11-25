const v = await call("result/envi-flows", {
  "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
});
console.log(v);
// [
//   {
//     flow: {
//       "@type": "Flow",
//       "@id": "60ea7a31-8f27-46af-bfe5-66417f00088b",
//       name: "Barite",
//       category: "Elementary flows/Emission to water/ocean",
//       flowType: "ELEMENTARY_FLOW",
//       refUnit: "kg"
//     },
//     isInput: false
//   },
//   {
//     flow: {
//       "@type": "Flow",
