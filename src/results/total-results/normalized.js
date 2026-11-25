const v = await call("result/total-impacts/normalized", {
  "@id": "15432ac4-7752-4066-a62d-31270f6a0dbd",
});
console.log(v);
// [
//   {
//     impactCategory: {
//       "@type": "ImpactCategory",
//       "@id": "248a3f3f-933e-3c45-a799-fad9f956e03c",
//       name: "Photochemical ozone formation",
//       category: "EF 3.0 Method (adapted)",
//       refUnit: "kg NMVOC eq"
//     },
//     amount: 0.0010466725460636012
//   },
