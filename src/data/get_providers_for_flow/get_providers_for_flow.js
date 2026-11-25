const v = await call("data/get/providers", {
  // only the ID is required here
  "@type": "Flow",
  "@id": "66c93e71-f32b-4591-901c-55395db5c132",
  name: "electricity, high voltage"
});
console.log(v);
// [
//   {
//     provider: {
//       "@type": "Process",
//       "@id": "ba98a130-d92c-4c40-8fe9-c8cab5b956ab",
//       name: "electricity production, wind, 1-3MW turbine, onshore",
//       processType: "LCI_RESULT",
//       flowType: "PRODUCT_FLOW"
//     },
