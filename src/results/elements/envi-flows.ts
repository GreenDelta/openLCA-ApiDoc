(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/envi-flows",
      params: {
        "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       flow: {
  //         "@type": "Flow",
  //         "@id": "60ea7a31-8f27-46af-bfe5-66417f00088b",
  //         name: "Barite",
  //         category: "Elementary flows/Emission to water/ocean",
  //         flowType: "ELEMENTARY_FLOW",
  //         refUnit: "kg"
  //       },
  //       isInput: false
  //     },
  //     {
  //       flow: {
  //         "@type": "Flow",
  // ANCHOR_END: body
})();
