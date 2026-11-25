const v = await call("result/total-impacts/weighted", {
  "@id": "546a1d13-3cae-4c9b-82d0-a18204b0c6eb",
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
//     amount: 2.038186234380937
//   },
//   ...
