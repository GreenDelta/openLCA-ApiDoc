(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/total-impacts/normalized",
      params: {
        "@id": "15432ac4-7752-4066-a62d-31270f6a0dbd",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  //{
  //  jsonrpc: "2.0",
  //  result: [
  //    {
  //      impactCategory: {
  //        "@type": "ImpactCategory",
  //        "@id": "248a3f3f-933e-3c45-a799-fad9f956e03c",
  //        name: "Photochemical ozone formation",
  //        category: "EF 3.0 Method (adapted)",
  //        refUnit: "kg NMVOC eq"
  //      },
  //      amount: 0.0010466725460636012
  //    },
  // ANCHOR_END: body
})();
