const v = await call("result/impact-categories", {
  "@id": "4780f66c-0b77-49ca-9226-c7ce4447ea2d",
});
console.log(v);
// [
//   {
//     "@type": "ImpactCategory",
//     "@id": "2dddb0a4-2f97-3fef-a4e6-708f0b4c2554",
//     name: "Human toxicity, cancer - inorganics",
//     category: "EF 3.0 Method (adapted)",
//     refUnit: "CTUh"
//   },
//   {
//     "@type": "ImpactCategory",
//     "@id": "248a3f3f-933e-3c45-a799-fad9f956e03c",
//     name: "Photochemical ozone formation",
//     category: "EF 3.0 Method (adapted)",
//     refUnit: "kg NMVOC eq"
//   },
