(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "TODO",
      params: {
        // TODO
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // TODO
})();