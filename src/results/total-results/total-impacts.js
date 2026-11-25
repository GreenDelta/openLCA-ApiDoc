const v = await call("result/total-impacts", {
  "@id": "86b36d3b-1dba-4804-bd61-dc5bcaf7c86c",
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
//     amount: 0.6387478227404646
//   },
// ...
