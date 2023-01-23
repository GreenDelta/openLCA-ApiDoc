(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/total-impacts/weighted",
      params: {
        "@id": "546a1d13-3cae-4c9b-82d0-a18204b0c6eb",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  //{
  //  jsonrpc: "2.0",
  //  result: [
  //    {
  //      {
  //        impactCategory: {
  //          "@type": "ImpactCategory",
  //          "@id": "3bc1c67f-d3e3-3891-9fea-4512107d88ef",
  //          name: "Climate change",
  //          category: "EF 3.0 Method (adapted)",
  //          refUnit: "kg CO2 eq"
  //        },
  //        amount: 2.038186234380937
  //      },
  //    },
  // ANCHOR_END: body
})();
