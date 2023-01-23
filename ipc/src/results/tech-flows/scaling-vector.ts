(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/scaling-factors",
      params: {
        "@id": "fa78990c-3f88-455a-9f8f-bd9e536bac28",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   result: [
  //     {
  //       techFlow: { provider: [Object], flow: [Object] },
  //       amount: 0.0016129032258064518
  //     },
  //     { techFlow: ...
})();
