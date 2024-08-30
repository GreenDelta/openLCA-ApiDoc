(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/direct-impact-values-of",
      params: {
        "@id": "86b36d3b-1dba-4804-bd61-dc5bcaf7c86c",
        impactCategory: {
          "@id": "dbdd01d5-2be4-3ba4-8127-de89f065fda1",
        },
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  //  {
  //     jsonrpc: "2.0",
  //     result: [
  //       {
  //         techFlow: { provider: [Object], flow: [Object] },
  //         amount: 0.00008582892489209728
  //       },
  //       { techFlow: { provider: [Object], flow: [Object] },
  //         amount: 2.023594297933216 },
  //    ...
  // ANCHOR_END: body
})();
