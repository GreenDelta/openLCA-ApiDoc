(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "result/dispose",
      params: {
        "@id": "e316a369-bf5b-4c25-a61f-3492cfca9535",
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //    jsonrpc: "2.0",
  //    result: {
  //      "@id": "e316a369-bf5b-4c25-a61f-3492cfca9535"
  //    },
  //    id: 1
  //  }
})();