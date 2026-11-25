const v = await call("result/impact-intensities-of", {
  "@id": "86b36d3b-1dba-4804-bd61-dc5bcaf7c86c",
  techFlow: {
    provider: { "@id": "37eb4bf5-9fbc-4caf-a24a-0e0b71b997dd" },
    flow: { "@id": "817c3650-4fed-4ef2-b9b6-404a198834e6" }
  }
});
console.log(v);
// [
//   {
//     impactCategory: {
//       "@type": "ImpactCategory",
//       "@id": "3bc1c67f-d3e3-3891-9fea-4512107d88ef",
//       name: "Climate change",
//       category: "EF 3.0 Method (adapted)",
//       refUnit: "kg CO2 eq"
//     },
//     amount: 1.3687522905554603
//   },
// ...
