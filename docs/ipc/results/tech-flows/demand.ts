(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/demand",
      params: {
        "@id": "841c7110-4106-49d3-8447-38acc0805ca5",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   id: 1,
  //   result: {
  //     amount: 1,
  //     techFlow: {
  //       provider: {
  //         "@type": "Process",
  //         "@id": "4446fcf6-7b87-4eb6-9529-775f3fe0c016",
  // ...
  // ANCHOR_END: body
})();
