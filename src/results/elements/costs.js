(async () => {
  // ANCHOR: body
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/currency",
      params: {
        "@id": "66dcc7d0-ce47-46bf-b77a-ada4b4c95169",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // ANCHOR_END: body
})();
