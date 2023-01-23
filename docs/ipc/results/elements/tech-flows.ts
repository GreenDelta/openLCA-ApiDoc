(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/tech-flows",
      params: {
        "@id": "77ccaffa-9d79-4f38-8da5-4413469b8a7b",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   id: 1,
  //   result: [
  //     {
  //        provider: {
  //          "@type": "Process",
  //          "@id": "7c619276-7b15-472a-b261-0110d461755a",
  //          name: "market for natural gas, high pressure",
  //          processType: "LCI_RESULT",
  //          flowType: "PRODUCT_FLOW"
  //        },
  //        flow: {
  //          "@type": "Flow",
  //          "@id": "a9007f10-7e39-4d50-8f4a-d6d03ce3d673",
  //          name: "natural gas, high pressure",
  // ANCHOR_END: body
})();
