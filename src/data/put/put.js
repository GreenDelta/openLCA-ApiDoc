(async () => {
  let resp = await fetch("http://localhost:8080", {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "data/put",
      params: {
        "@type": "Source",
        "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
        "name": "Inter-process communication with openLCA",
        // ...
      }
    })
  });
  let v = await resp.json();
  console.log(v);
  // {
  //   jsonrpc: "2.0",
  //   id: 1,
  //   result: {
  //     "@type": "Source",
  //     "@id": "91bbc461-4ce1-4f83-b95d-de0909575174",
  //     name: "Inter-process communication with openLCA"
  //   }
  // }
})();
