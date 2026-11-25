const v = await call("data/get/usage", {
  "@type": "Flow",
  "@id": "7f6bb533-2d3c-43a6-ac60-6eef299d7c52",
});
console.log(v);
// [
//   { "@type": "Process", "@id": "71dab7ae-...", name: "steel production", ... },
//   { "@type": "ImpactCategory", "@id": "...", name: "Climate change", ... },
//   ...
// ]
