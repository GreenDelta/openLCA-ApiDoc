(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/total-impacts-of",
      params: {
        "@id": "86b36d3b-1dba-4804-bd61-dc5bcaf7c86c",
        techFlow: {
          provider: { "@id": "37eb4bf5-9fbc-4caf-a24a-0e0b71b997dd" },
          flow: { "@id": "817c3650-4fed-4ef2-b9b6-404a198834e6" }
        }
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       impactCategory: {
  //         "@type": "ImpactCategory",
  //         "@id": "3bc1c67f-d3e3-3891-9fea-4512107d88ef",
  //         name: "Climate change",
  //         category: "EF 3.0 Method (adapted)",
  //         refUnit: "kg CO2 eq"
  //       },
  //       amount: 0.020981112466506135
  //     },
  //  ...
  // ANCHOR_END: body
})();
