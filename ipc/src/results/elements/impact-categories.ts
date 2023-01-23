(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/impact-categories",
      params: {
        "@id": "4780f66c-0b77-49ca-9226-c7ce4447ea2d",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       "@type": "ImpactCategory",
  //       "@id": "2dddb0a4-2f97-3fef-a4e6-708f0b4c2554",
  //       name: "Human toxicity, cancer - inorganics",
  //       category: "EF 3.0 Method (adapted)",
  //       refUnit: "CTUh"
  //     },
  //     {
  //       "@type": "ImpactCategory",
  //       "@id": "248a3f3f-933e-3c45-a799-fad9f956e03c",
  //       name: "Photochemical ozone formation",
  //       category: "EF 3.0 Method (adapted)",
  //       refUnit: "kg NMVOC eq"
  //     },
})();